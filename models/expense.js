const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Expense', ExpenseSchema)