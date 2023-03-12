require("dotenv").config();

var express = require("express");
var app = express();
var ejs = require("ejs");
let products = require("./router/post.route");
app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');
app.use("/all",products);

app.get("/",(request,response)=>{

    response.render("index");
})



app.listen(process.env.PORT,()=>{console.log(`connected at port ${process.env.PORT}`)});

