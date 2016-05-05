var express = require('express');

var mainRouter = express.Router();

mainRouter.route('/')
  .get(function(req,res){
    res.render('index');
  })

mainRouter.route('/books')
  .get(function(req,res){
    res.send('Hello, Books!');
  })

module.exports = mainRouter;
