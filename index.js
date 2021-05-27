const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const object = require('./web3/controller');

app.use(bodyparser.json());

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/', (req, res) => {
  res.send("Welcome");
});
//Insert an employees
app.post('/swapTokens', async (req, res) => {
  let emp = req.body;
  try {
    let response = await object.swapTokens(emp);
    res.send(response)
  }
  catch (e) {
    console.log(e)
  }
});

app.post('/getBalance', async (req, res) => {
  let emp = req.body;
  try {
    const temp = await object.getBalance(emp);
    res.send(temp)
  }
  catch (e) {
    console.log(error)
  }
});

app.post('/getConversion', async (req, res) => {
  let emp = req.body;
  try {
    const temp = await object.getEthToMt(emp);
    res.send(temp)
  }
  catch (e) {
    console.log(error)
  }
});