const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const pug = require('pug');
const mongoose = require("mongoose")
const _ = require('lodash');
const path = require('path');

const { Ticket } = require('./models/ticket')
const { initializePayment, verifyPayment } = require('./config/paystack')(request);

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public/')));
app.set('view engine', pug);

app.get('/', (req, res) => {
    res.render('index.pug');
});


app.post('/paystack/pay', (req, res) => {
    const form = _.pick(req.body, ['amount', 'email', 'full_name']);
    form.metadata = {
        full_name: form.full_name
    }
    form.amount *= 100;

    initializePayment(form, (error, body) => {
        if (error) {
            console.log(error);
            return res.redirect('/error')
        }
        response = JSON.parse(body);
        console.log(response.data.reference)
        res.redirect(response.data.authorization_url)
    });
});

app.get('/paystack/callback', (req, res) => {
    const ref = req.query.reference;
    verifyPayment(ref, (error, body) => {
        if (error) {
            //handle errors appropriately
            console.log(error)
            return res.redirect('/error');
        }
        response = JSON.parse(body);

        const data = _.at(response.data, ['reference', 'amount', 'customer.email', 'metadata.full_name', 'customer.id']);

        [reference, amount, email, full_name, ticketId] = data;

        newTicket = { reference, amount, email, full_name, ticketId }

        const ticket = new Ticket(newTicket)

        ticket.save().then((ticket) => {
            if (!ticket) {
                return res.redirect('/error');
            }
            res.redirect('/receipt/' + ticket._id);
        }).catch((e) => {
            res.redirect('/error');
        })
    })
});

app.get('/receipt/:id', (req, res) => {
    const id = req.params.id;
    Ticket.findById(id).then((ticket) => {
        if (!ticket) {
            //handle error when the ticket is not found
            res.redirect('/error')
        }
        res.render('success.pug', { ticket });
    }).catch((e) => {
        res.redirect('/error')
    })
})

app.get('/error', (req, res) => {
    res.render('error.pug');
})

const conn_str = "mongodb+srv://downtownthebrand:Reginald476.@cluster0.9phko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("error in connection");
        } else {
            console.log("mongodb is connected");
        }
    });

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})