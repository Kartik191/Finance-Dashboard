import express from 'express';
import Transaction from '../models/Transaction';

const router = express.Router();
router.get("/transactions", async(req, res) => {
    try {
        const transactions = Transaction.find()
        .limit(50)
        .sort({createdOn: -1});
    } catch(err) {
        res.status(404).json({message: err.message})
    }
})

export default router;