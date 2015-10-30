// First at the top of your routes.js file you'll have to require the controller
var http = require('http');
var path = require('path');

var posts = require('./../server/controllers/posts.js');
var comments = require('./../server/controllers/comments.js');
var Contribution = require('./../server/controllers/contributions.js')


module.exports = function(app) {

	app.post('/add/post', function(req, res){
    	// console.log('00000 add in post');
    	posts.add(req, res);
  	})
  	app.post('/add/comment', function(req, res){
    	// console.log('111111 add in comment');
    	comments.add(req, res);
  	})
  	app.post('/show/posts', function(req, res){
  // 		console.log('2222 show in post');
    	posts.show(req, res);
  	})
  	app.post('/show/comments', function(req, res){
  // 		console.log('3333 show in comment');
    	comments.show(req, res);
  	})
    app.get('/maps', function(req,res){
      res.sendFile(path.resolve(__dirname + "/../client/partials/maps.html"));
    })

  app.get('/contributions', function(req, res){
	  console.log("inside the route")
	  Contribution.show(req, res);
  })
  app.post('/contribution/add', function(req, res){
    //   console.log(req.body.contribution.toLowerCase());
      Contribution.add(req, res);
  })






}// end of module export
