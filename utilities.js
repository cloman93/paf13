var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;

var blockedChanged = false;
var blockedSites = getBlocked();

function getBlocked() {
	if (blockedChanged) {
		console.log("rebuilding blocked sites array");
		chrome.storage.sync.get("blocking", function(callback){
			console.log(callback.blocking);
			blockedSites = callback.blocking;
		});
		if (blockedSites === undefined) blockedSites = [];
		blockedChanged = false;
	}
}

var trackedChanged = false;
var trackedSites = getTracked();

function getTracked() {
	if (trackedChanged) {
		console.log("rebuilding tracked sites array");
		chrome.storage.sync.get("tracking", function(callback){
			console.log(callback.tracking);
			trackedSites = callback.tracking;
		});
		if (trackedSites === undefined) trackedSites = [];
		trackedChanged = false;
	}
}

var timeChanged = false;
var timeLeft = getTimeLeft();

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