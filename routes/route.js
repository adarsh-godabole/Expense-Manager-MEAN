const express = require('express');
const router = express.Router();

const Expense = require('../models/expense')

router.get("/expenses", async(req, res) => {
    const expense = await Expense.find()
    res.send(expense)
})

router.post("/expense", async(req, res) => {
    console.log(req.body);
    const exp = new Expense({
        name: req.body.name,
        amount: req.body.amount,
    })
    await exp.save()
    res.send(exp)
})

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