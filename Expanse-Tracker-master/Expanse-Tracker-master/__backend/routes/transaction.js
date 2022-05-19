const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// POST Transaction
router.post("/", async (req, res) => {
  try {
    const { text, amount } = req.body;
    const newTransaction = new Transaction({
      text,
      amount,
    });
    let transaction = await newTransaction.save();
    res.json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// GET Transaction
router.get("/", async (req, res,) => {
  try {
    let transaction = await Transaction.find().sort({ date: -1 });
    res.json(transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// DELETE tranaction
router.delete("/:id", async (req, res) => {
  try {
    let tranaction = await Transaction.findById(req.params.id);
    if (!tranaction) {
      res.status(404).json({ msg: "Transaction not found" });
    }
    await Transaction.findByIdAndRemove(req.params.id);
    res.json({ msg: "Transaction deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
