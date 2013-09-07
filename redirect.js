var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;

var testArray = ["facebook.com", "reddit.com", "bing.com"];

var blockedSites = getBlocked();

function getBlocked() {
	console.log("rebuilding blocked sites array");
	chrome.storage.sync.get("websites", function(callback){
		console.log(callback.websites);
		blockedSites = callback.websites;
	});
}

function blockSite(requested) {
	console.log("START: " + requested.url);
	var req = requested.url.match(pattern)[0];
	var blocked = false;
	console.log("CURRENT LOG:" + blockedSites);
	blockedSites.forEach(function(s){
		console.log("-looking at: " + s);
		if (s === req || s == req) {
			console.log("FOUND MATCH, WILL BLOCK");
			blocked = true;
		}
	});
	/*testArray.forEach(function(s){
		if (s === req) {
			console.log(s);
			blocked = true;
			return;
		}
	});*/
	if (blocked) {
		console.log("REDIRECTING:" + requested.url);
			return {redirectUrl: "https://www.google.com"};
	} else {
		console.log("ALLOWING: " + requested.url);
		return {redirectUrl: requested.url};
	}
}

console.log("running...");
chrome.webRequest.onBeforeRequest.addListener(blockSite, {urls: ["*://*/*"]}, ['blocking']);