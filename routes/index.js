var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Headline = mongoose.model('Headline');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

/* GET post page. */
router.get('/post', function(req, res, next) {
  res.sendFile('submit.html', { root: 'public' });
});

/* GET account page */
router.get('/account', function(req, res, next) {
  res.sendFile('login.html', { root: 'public' });
});

/* GET user page */
router.get('/user', function(req, res, next) {
  res.sendFile('user.html', { root: 'public' });
});

/* POST submission. */
router.post('/headlines', function(req, res, next) {
  var headline = new Headline(req.body);
  headline.save(function(err, headline){
    if(err){ return next(err); }
    res.json(headline);
  });
});

/* GET headlines. */
router.get('/headlines', function(req, res, next) {
  Headline.find(function(err, headlines){
    if(err){ return next(err); }
    res.json(headlines);
  });
});

router.get('/userHeadlines/:userName', function(req, res) {
  console.log(req.params.userName);
  Headline.find(req.params.userName, function(err, userName){
    if(err){ return next(err); }
    res.json(userName);
  });
});

router.param('userName', function(userName){
  return userName;}
);

router.param('headline', function(req, res, next, id) {
  var query = Headline.findById(id);
  query.exec(function (err, headline){
    if (err) { return next(err); }
    if (!headline) { return next(new Error("can't find headline")); }
    req.headline = headline;
    return next();
  });
});

router.get('/headlines/:headline', function(req, res) {
  res.json(req.headline);
});

router.put('/headlines/:headline/upvote', function(req, res, next) {
  req.headline.upvote(function(err, headline){
    if (err) { return next(err); }
    res.json(headline);
  });
});

router.put('/headlines/:headline/downvote', function(req, res, next) {
  req.headline.downvote(function(err, headline){
    if (err) { return next(err); }
    res.json(headline);
  });
});


router.get('/deleteSecretPasswordToDeleteAMAMAMAM', function(req,res,next) {
	console.log("Delete Post");
	Headline.collection.remove();
	res.sendStatus(200);
})

module.exports = router;
