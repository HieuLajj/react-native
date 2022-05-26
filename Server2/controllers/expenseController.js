const { response } = require("express");
const Expense = require("../models/expense");
const expenseController = {
     
    //create expense 
    create : async (req, res) => {
      console.log(req.user._id);
      const { description, title, amount } = req.body;
      try {
        const exp = await Expense.create({
          description,
          title,
          amount,
          user: req.user._id
        });
        res.json("them thanh cong")
      } catch (error) {
        res.json(error);
      }
    },

    // fetch all incone
    fetch_all: async (req,res) => {
      try {
        const exp = await Expense.find();
        res.json(exp);
      } catch (error) {
        res.json(error);
      }
    },

    //fetch single income
    fetch_single: async (req,res) => {
      console.log(req.user._id);
      try {
        const exp = await Expense.find({'user':req.user.id});
        res.json({success: true, exp});
      } catch (error) {
        res.json(error);
      }
    },
    
    //update
    update: async (req,res) => {
      try {
        const {id} = req?.params;
        res.json(id);
      } catch (error) {
        res.json(error)
      }
    }, 
    
    //delete
    delete: async (req,res) =>{
        const {id} = req?.params;
        try {
          const exp = await Expense.findByIdAndDelete(id);
          res.json({success: true, exp});
        } catch (error) {
          res.json(error);
        }
    },
}

module.exports = expenseController;