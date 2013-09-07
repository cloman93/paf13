var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;

var blockedSites = getBlocked();

function getBlocked() {
	console.log("rebuilding blocked sites array");
	chrome.storage.sync.get("blocking", function(callback){
		console.log(callback.blocking);
		blockedSites = callback.blocking;
	});
	if (blockedSites === undefined) blockedSites = [];
}

var trackedSites = getTracked();

function getTracked() {
	console.log("rebuilding tracked sites array");
	chrome.storage.sync.get("tracking", function(callback){
		console.log(callback.tracking);
		trackedSites = callback.tracking;
	});
	if (trackedSites === undefined) trackedSites = [];
}

var timeLeft = getTimeLeft();

function getTimeLeft() {
	console.log("rebuilding time left array");
	chrome.storage.sync.get("time", function(callback){
		console.log(callback.time);
		timeLeft = callback.time;
	});
	if (timeLeft === undefined) timeLeft = [];
}