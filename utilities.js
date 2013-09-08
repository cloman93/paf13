var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;
<<<<<<< HEAD
=======

<<<<<<< HEAD
var blockedChanged = true;
var blockedSites = [];
getBlocked();
=======
var blockedChanged = false;
var blockedSites = getBlocked();
>>>>>>> upstream/master
<<<<<<< HEAD
>>>>>>> ed46fde458b6b0418f505363b06b56b656a56118
=======
>>>>>>> ed46fde458b6b0418f505363b06b56b656a56118

var blockedSites = getBlocked();
function getBlocked() {
	if (blockedChanged) {
		console.log("rebuilding blocked sites array");
		chrome.storage.sync.get("blocking", function(callback){
			console.log(callback.blocking);
			if (callback.blocking === undefined) {
				blockedSites = [];
			} else {
				blockedSites = callback.blocking;
			}
		});
		blockedChanged = false;
	}
}

<<<<<<< HEAD
var trackedChanged = true;
var trackedSites = [];
var trackedListening = [];
getTracked();

=======
var trackedChanged = false;
var trackedSites = getTracked();
<<<<<<< HEAD
>>>>>>> ed46fde458b6b0418f505363b06b56b656a56118
=======
>>>>>>> ed46fde458b6b0418f505363b06b56b656a56118
function getTracked() {
<<<<<<< HEAD
	console.log("rebuilding tracked sites array");
	chrome.storage.sync.get("tracking", function(callback){
		console.log(callback.tracking);
		trackedSites = callback.tracking;
	});
}

var timeLeft = getTimeLeft();
function getTimeLeft() {
	console.log("rebuilding time left array");
	chrome.storage.sync.get("time", function(callback){
		console.log(callback.time);
		timeLeft = callback.time;
	});
}
=======
	if (trackedChanged) {
		console.log("rebuilding tracked sites array");
		chrome.storage.sync.get("tracking", function(callback){
			console.log(callback.tracking);
			if (callback.tracking === undefined) {
				trackedSites = [];
			} else {
				trackedSites = callback.tracking;
			}
		});
		for (var i = 0; i < trackedSites.length; i++) {
			trackedListening.push(false);
		}
		trackedChanged = false;
	}
}

var timeChanged = true;
var timeLeft = [];
getTimeLeft();

function getTimeLeft() {
	if (timeChanged) {
		console.log("rebuilding time left array");
		chrome.storage.sync.get("time", function(callback){
			console.log(callback.time);
			timeLeft = callback.time;
		});
		if (timeLeft === undefined) timeLeft = [];
		timeChanged = false;
	}
}
>>>>>>> upstream/master
