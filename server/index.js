

var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  console.log('inside /items GET Serveer')
  items.selectAll(function(err, data) {
    if(err) {  
      res.sendStatus(500);
      res.send(data);
    } else {
      console.log('GOT ITT!!! ===***===>', data);
      res.json(data);
    }
  });
});

app.post('/addIt', function (req, res) {
  console.log('inside /add POST Serveer')
  items.addTodo(req.body.item, (wat)=>{console.log(wat)})
  res.end();
  
});

app.delete('/remove', function (req, res) {
  console.log('inside /DELETE POST Serveer')
  console.log(req.body.item) //this shows up as {}
  items.remove(req.body.item, (wat)=>{console.log(wat)})
  res.end();
  
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

