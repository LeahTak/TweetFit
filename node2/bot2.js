console.log("starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);


tweetIt();
setInterval(tweetIt,1000*30)


function tweetIt(){
	var array = [ " Push Up", " Sit Ups", " Lunges", " bicep curls", " jumping jacks", " cobras"," medicine ball slam", " squats", " crunches"];
	var r = Math.floor(Math.random()*10);
	// var fit = 0;
	// var temp = fit;

	var fit = Math.floor(Math.random() * (array.length)-1)
	var tweet = {
		status: r + array[fit] + ' #TweetFit'

	}

	console.log(tweet.status);

	T.post('statuses/update', tweet);

}


	// function tweeted (err, data, response) {
	// 	if (err){
	// 		console.log("Error");
	// 	}else{

 //  	console.log("Working!");
	// 	} 

