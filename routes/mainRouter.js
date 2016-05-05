var express = require('express');

var mainRouter = express.Router();

mainRouter.route('/')
  .get(function(req,res){
    res.render('home');
  })

mainRouter.route('/mediacenter')
  .get(function(req,res){
    res.render('mediacenter');
  })

mainRouter.route('/music')
  .get(function(req,res){
    res.render('music');
  })

mainRouter.route('/controls')
  .get(function(req,res){
    res.render('controls');
  })

mainRouter.route('/security')
  .get(function(req,res){
    res.render('security');
  })

mainRouter.route('/services')
  .get(function(req,res){
    res.render('services');
  })

mainRouter.route('/climate')
  .get(function(req,res){
    res.render('climate');
  })

mainRouter.route('/notifications')
  .get(function(req,res){
    res.render('notifications');
  })

module.exports = mainRouter;
