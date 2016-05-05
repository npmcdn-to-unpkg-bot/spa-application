var express = require("express");
var app     = express();
var morgan  = require("morgan");
var jade    = require("jade");
var port    = process.env.PORT || 3333;

var mainRouter = require('./routes/mainRouter.js');

app.use(express.static('public'));
app.set('views','views');
app.set('view engine', 'jade');
app.use(morgan('combined'));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.use('/', mainRouter);

app.listen(port);
console.log('listening on port ' + port + '...');
