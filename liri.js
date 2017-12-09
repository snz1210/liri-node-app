var Twitter = require("twitter");
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var spotify = require("spotify");
var client = new Twitter(keys);
var userCommand = process.argv[2];
var userInput = process.argv[3];
console.log(keys);
function myTweets () {

	var params = {screen_name: 'JohnSno60581552'};
	client.get('statuses/user_timeline', function(error, tweets, response) {
		if(error) {
			console.log(error);
		}
		else {
			for (var i = 0; i < tweets.length; i++) {
// it's i < 20 for more when i tweet more
			console.log(tweets[i].text);
			}
		}	
})
};


if (userCommand === "my-tweets") {
	myTweets ();
}

// SPOTIFY
// Client ID 4f8c7f0fd02c43f2bf58a14c170ff36a
// Client Secret c422f593c5d84462b9a3d94dd30de56d