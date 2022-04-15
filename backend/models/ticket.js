
const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    reference: {
        type: String,
        required: true
    },
    ticketId: {
        type: Number,
        required: true,
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { Ticket }