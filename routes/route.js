const express = require('express');
const router = express.Router();



const Expense = require('../models/expense')

router.get('/expenses', (req, res, next) => {
    Expense.find(function(err, expenses) {
        res.json(expenses)

    })
})

router.post('/expense', (req, res, next) => {
    let newExpense = new Expense({
        name: req.body.name,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category


    })

    newExpense.save((err, expense) => {
        if (err) {
            res.json({ msg: "Failed to add" })
        } else {
            res.json({ msg: "Expense added" })
        }
    });
});

router.delete('/expense/:id', (req, res, next) => {
    Expense.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})


module.exports = router;