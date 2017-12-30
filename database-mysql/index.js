


var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM todo', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });

};

var addTodo = function(val, callback){
  connection.query(`INSERT INTO todo (item) VALUES ('${val}')`, function(err, results, fields){
    if(err){
      callback(err, null)
    }else{
      callback(null, results);
    }
  })
}

var remove = function(val, callback){
  connection.query(`DELETE from todo where item = '${val}'`, function(err, results, fields){
    if(err){
      callback(err, null)
    }else{
      callback(null, results);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.addTodo = addTodo;
module.exports.remove = remove;
