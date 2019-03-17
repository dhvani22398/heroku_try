const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
var app = express();
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.render('index.hbs');
});
const port = process.env.PORT ||8080;
app.post('/',(req,res)=>{
    console.log( req.body.name);
    // res.send(text);
});
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});