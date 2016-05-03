var express = require("express"),
              router = express.Router();
var app     = express();
var morgan  = require("morgan");
var port    = process.env.PORT || 3333;

app.use(express.static('public'));
app.use(morgan('combined'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('listening on port ' + port + '...');
