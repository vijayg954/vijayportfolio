// const express = require('express')
import express from "express"
// const mongoose= require ("mongoose")
import mongoose from "mongoose"
// const cors = require("cors")
import cors from "cors"
// const bodyParser= require("body-parser")
import  bodyParser from"body-parser"

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://vijayg954:vijayg954@vg1.b9bmkni.mongodb.net/vg11?retryWrites=true&w=majority&appName=vg1');

    console.log("connected")
}
const userschema = new mongoose.Schema({
    name: String,
    email:String,
    phone:Number,
    feedback:String,

  });
  const Uservg= mongoose.model('Uservg', userschema);

const app = express()
const port = 3000
app.use (cors());
app.use (bodyParser.json());
app.post('/', async(req, res) => {
    let user= new Uservg()
    user.name=req.body.name;
    user.email=req.body.email;
    user.phone=req.body.phone;
    user.feedback=req.body.feedback;

    const doc= await user.save()
    console.log (doc)
   res.json(doc)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})