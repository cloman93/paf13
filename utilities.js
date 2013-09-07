var blockedSites = getBlocked();

function getBlocked() {
	console.log("rebuilding blocked sites array");
	chrome.storage.sync.get("blocking", function(callback){
		console.log(callback.blocking);
		blockedSites = callback.blocking;
	});
}

var trackedSites = getTracked();

function getTracked() {
	console.log("rebuilding tracked sites array");
	chrome.storage.sync.get("tracking", function(callback){
		console.log(callback.tracking);
		blockedSites = callback.tracking;
	});
}