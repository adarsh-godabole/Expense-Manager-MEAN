const express = require('express');
const router = express.Router();

const Expense = require('../models/expense')

router.get("/expense", async(req, res) => {
    const expense = await Expense.find()
    res.send(expense)
})

router.post('/expense', (req, res, next) => {
    console.log(req.body);
    let newExpense = new Expense({
        name: req.body.name,
        amount: req.body.amount
    });

    newExpense.save((err, expense) => {
        if (err) {
            res.json({ msg: 'Failed to add Expense' });
        } else {
            expense;
        }
    })
});

// router.delete('/expense/:id', (req, res, next) => {
//     Expense.remove({ _id: req.params.id }, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     })
// })


module.exports = router;