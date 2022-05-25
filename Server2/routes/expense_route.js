const express = require("express");
const router = require("express").Router();
const expenseCtrl = require("../controllers/expenseController")
const { isAuth } = require("../middlewares/validations/auth");
const expense = require("../models/expense");


router.post('/add_expense',isAuth,expenseCtrl.create);
router.get('/fetch_all',isAuth,expenseCtrl.fetch_all);
router.get('/listbyuser',isAuth,expenseCtrl.fetch_single);
router.put('/update/:id',isAuth,expenseCtrl.update);
module.exports = router;