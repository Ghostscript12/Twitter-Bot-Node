var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
var giphy = require('giphy-api')('46fd06f1e7a44308af73e966081749e4');
console.log('Running Reply Bot')
//Oauth
var T = new Twit(config);

//Setup a stream
var stream = T.stream('user');

function random (low, high) {
    return Math.random() * (high - low) + low;
}

function get_gif(keyword) {

function return_gif(err, res, cb) {
    if (err) {
      console.log('Issue with Gif');
    } else {
      cb(res.data.url);
    }

  }

  var params = {
    tag: keyword,
    rating: 'pg'
  }
  giphy.random(params, return_gif;
  console.log(gif);
  return(gif);
}

function reply(tweet, ) {
  var recipiants = tweet.in_reply_to_screen_name;
  var sender = tweet.user.screen_name;
  var text = tweet.text;

  //get_gif('Batman', do_tweet);

  console.log(gif_url);
  var randnum = random(0,1000);
  if (recipiants == 'I_am_MrBot') {
    var rply = '@' + sender + ' ' + 'Thanks for the tweet! ' + randnum;
    TweetIt(rply);
  }
}

function TweetIt(txt) {

  var tweet = {
    status: txt
  }

  function status(err, data, response) {

    if (err) {
      console.log('Oh No! Something went wrong.');
      console.log(err);
    } else {
      console.log('Whoo it worked!');
    }
  }

  T.post('statuses/update', tweet, status);
}

stream.on('tweet', reply);
