var Twitter = require("twitter");
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var spotify = require("spotify");
var client = new Twitter(keys.twitterKeys);
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

function spotifyThisSong () {

	var SpotifyWebApi = require('./node_modules/spotify-web-api-node');
 
	var spotifyApi = new Spotify(keys.spotifyKeys);
	
	if (userInput != undefined) {
		
		spotifyApi.searchTracks(userInput)

	  	.then(function(data) {

	    	console.log(data.body.tracks.items[0].artists[0].name);
	    	console.log(data.body.tracks.items[0].album.name);
	    	console.log(data.body.tracks.items[0].name);
	    	console.log(data.body.tracks.items[0].preview_url);
	  	}, 

	  	function(err) {
	    	console.error(err);
	  	});

  	} else {

  		userInput = 'The Sign';
  		spotifyThisSong();
  	}

};




if (userCommand === "my-tweets") {
	myTweets ();
}

if (userCommand === "spotify-this-song") {
	SpotifyThisSong ();
}
