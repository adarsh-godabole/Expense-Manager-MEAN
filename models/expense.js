const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({

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
    }
})

const Expense = mongoose.exports = mongoose.model('Expense', ExpenseSchema)