const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();


const port = 5000;

app.use(express.static(path.join(__dirname,"resource/static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"resource/view"));

app.get('/get',(req,res)=>{
  res.render('get');
})

app.get('/',(req,res)=>{
  res.render('home');
})
app.get('/list',(req,res)=>{
    res.render('list')
})
app.get('/update',(req,res)=>{
  res.render('update');
});
app.listen(port)