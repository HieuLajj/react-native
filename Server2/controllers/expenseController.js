const { response } = require("express");
const Expense = require("../models/expense");
const mongoose = require("mongoose");
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
      const {id} = req?.params;
      const { description, title, amount } = req.body;
      try {
        const exp = await Expense.findByIdAndUpdate(
          id,
          {
            description,
            title,
            amount,
          },
          { new: true, runValidators: true }
          )
          res.json({success: true, exp});
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
    //phanloai
    expenseByCategory : async (req,res)=>{
    //  console.log(req.user._id);
        const today = new Date()
        today.setUTCHours(0,0,0,0)
  
        const tomorrow = new Date()
        tomorrow.setUTCHours(0,0,0,0)
        tomorrow.setDate(tomorrow.getDate()+1)

        const date = new Date(), y = date.getFullYear(), m = date.getMonth()
        const firstDayMonth = new Date(y, m, 1)
        const lastDayMonth = new Date(y, m + 1, 0)
        try {
           
          let exp2 = await Expense.aggregate([{
            $facet:{
              today: [
              {$match: { 
                 created: { $gte : today, $lt: tomorrow }
                ,user: mongoose.Types.ObjectId(req.user._id) 
              }},
              {$group:{
                _id:"$title",
                total: {$sum: "$amount"}
              }},
              {$sort:{
               _id:1
              }} 
              ],
              totalday:[
                {$match:{
                  created: { $gte : today, $lt: tomorrow }
                  ,user: mongoose.Types.ObjectId(req.user._id) 
                }},
                {$group:{
                  _id: today,
                  total: {$sum: "$amount"}
                }} 
              ],
              month: [
                {$match: { 
                   created: { $gte : firstDayMonth, $lt: lastDayMonth }
                  ,user: mongoose.Types.ObjectId(req.user._id) 
                }},
                {$group:{
                  _id:"$title",
                  total: {$sum: "$amount"}
                }},
                {$sort:{
                  _id:1
                }} 
              ],
              totalmonth:[
                {$match:{
                   created: { $gte : firstDayMonth, $lt: lastDayMonth }
                  ,user: mongoose.Types.ObjectId(req.user._id) 
                }},
                {$group:{
                  _id: firstDayMonth,
                  total: {$sum: "$amount"}
                }} 
              ],

            }         
          }]);
          let exp = {month: exp2[0].month,today: exp2[0].today,totalday: exp2[0].totalday[0], totalmonth: exp2[0].totalmonth[0]}
          res.json({success: true, exp});
        } catch (error) {
          res.json(error)
        }
    },
}

module.exports = expenseController;