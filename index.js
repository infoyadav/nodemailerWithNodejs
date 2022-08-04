"use strict";

require("dotenv").config();
var express = require("express");
var nodemailer = require("nodemailer");

var app = express();

var port = 3005;

let mailTrasporter = nodemailer.createTransport({
    pool: true,
    service: "gmail",
    host: 'smtp.gmail.com',
    // port: 465,
    port: 587,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let details = {
    from: process.env.EMAIL,
    to: "abhay69rana@gmail.com",
    subject: "Hello ✔", // Subject line
    text: "Hello Rana ji", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
}

mailTrasporter.sendMail(details, (err)=>{
    if(err){
        console.log("It is an error", err);
    }else{
        console.log("Email has sent");
    }
});

mailTrasporter.verify().then(console.log).catch(console.error);

app.listen(port, ()=>{
    console.log(`server is running on http://127.0.0.1:${port}`);
});