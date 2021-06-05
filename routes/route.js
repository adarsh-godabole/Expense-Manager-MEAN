const express = require('express');
const router = express.Router();

const Expense = require('../models/expense')

router.get("/expense", async(req, res) => {
    const expense = await Expense.find()
    res.send(expense)
})

router.get("/expense/:id", async(req, res) => {
    try {
        const expense = await Expense.findOne({ id: req.params.id })
        res.send(expense)
    } catch {
        res.status(404)
        res.send({ error: "Expense doesn't exist!" })
    }
})
router.post('/expense', (req, res, next) => {
    console.log(req.body);
    let newExpense = new Expense({
        id: req.body.id,
        name: req.body.name,
        amount: req.body.amount,
        date: req.body.date,
        category: req.body.category

    });

    newExpense.save((err, expense) => {
        if (err) {
            res.json({ msg: 'Failed to add Expense' });
        } else {
            expense;
        }
    })
});

router.delete('/expense/:id', (req, res, next) => {
    Expense.remove({ id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})


module.exports = router;