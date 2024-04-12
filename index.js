const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index',{items: items});
});

app.post('/', function(req,res){
    items.push(req.body.newItem);
    res.redirect('/');
});

app.listen(3000,function(){
    console.log('server is running');
});