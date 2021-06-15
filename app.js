const express = require('express');
const mongoose = require('mongoose');


const app = express();
const url="mongodb+srv://akhila:w76HsipHYG6q1qah@cluster0.ii9if.mongodb.net/test"





mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{console.log("connected to mongodb")});
mongoose.connection.on('error',(err)=>{console.log("error",err)});



app.use(express.json());
app.set('view engine', 'ejs');
require('./models/user');
require('./models/post');
app.use(require('./routes/auth'));
app.use(require('./routes/post'));


app.get('/',(req,res)=>{res.render('home.ejs')})
app.get('/login',(req,res)=>{res.render('login.ejs')})
app.get('/sign',(req,res)=>{res.render('signup1.ejs')})
app.get('/profile',(req,res)=>{res.render('profile.ejs')})




app.listen(8000,()=>{
    console.log("listening")
});