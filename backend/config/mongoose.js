const mongoose = require('mongoose');

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

