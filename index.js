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

function TweetIt(txt) {

  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, status);

  function status(err, data, response) {

    if (err) {
      console.log('Oh No! Something went wrong.');
      console.log(err);
    } else {
      console.log('Whoo it worked!');

    }
  }


}

function reply(tweet) {

  var recipiants = tweet.in_reply_to_screen_name;
  var sender = tweet.user.screen_name;
  var text = tweet.text;


  console.log(recipiants + ' ' + sender + ' ' + text);

  var params = {
    tag: text,
    rating: 'pg'
  }

  giphy.random(params, function(err, res){

    if(err) {
      console.log('Issue with Gif');

    } else {
    console.log('working!')
      var gif_url = res.data.url;
      var randnum = random(0,1000);
      if (recipiants == 'I_am_MrBot') {
        var rply = '@' + sender + ' ' + 'Here have a gif!  ' + ' ' + gif_url;
        console.log(rply);
        TweetIt(rply);
      }
    }
  });
}



stream.on('tweet', reply);
