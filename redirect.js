<<<<<<< HEAD
var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;

var blockedSites = [];

function getBlocked() {
	console.log("rebuilding blocked sites array");
	chrome.storage.sync.get("websites", function(callback){
		console.log(callback.websites);
		blockedSites = callback.websites;
	});
}


=======
>>>>>>> upstream/master
function blockSite(requested) {
	getBlocked();
	//console.log("START: " + requested.url);
	var req = requested.url.match(pattern)[0];
	var blocked = false;
	//console.log("CURRENT LOG: " + blockedSites);
	blockedSites.forEach(function(s){
		//console.log("-looking at: " + s);
		if (s === req) {
			//console.log("FOUND MATCH, WILL BLOCK");
			blocked = true;
		}
	});
	if (blocked) {
		//console.log("REDIRECTING:" + requested.url);
			return {redirectUrl: "chrome-extension://mbipjdgekkbkafemhejdbgaencplgmca/index.html"};
	} else {
		//console.log("ALLOWING: " + requested.url);
		return {redirectUrl: requested.url};
	}
}

<<<<<<< HEAD
console.log("running...");
chrome.webRequest.onBeforeRequest.addListener(blockSite, {urls: ["*://*/*"]}, ['blocking']);
=======
//console.log("running...");
chrome.webRequest.onBeforeRequest.addListener(blockSite, {urls: ["*://*/*"]}, ['blocking']);
>>>>>>> upstream/master
