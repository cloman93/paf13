var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;

var testArray = ["facebook.com", "reddit.com", "bing.com"];

function blockSite(requested) {
	console.log("1: " + requested.url);
	var req = requested.url.match(pattern)[0];
	var blocked = false;
	chrome.storage.sync.get("websites",function(callback){
		console.log("2: " + requested.url);
		callback.websites.forEach(function(s){
			console.log("3: " + requested.url);
			if (s === req) {
				console.log("4a: " + requested.url);
				return {redirectUrl: "https://www.google.com"};
			}
		});
	});
	/*testArray.forEach(function(s){
		if (s === req) {
			console.log(s);
			blocked = true;
			return;
		}
	});*/
	console.log("4b: " + requested.url);
	return {redirectUrl: requested.url};
}

console.log("running...");
chrome.webRequest.onBeforeRequest.addListener(blockSite, {urls: ["*://*/*"]}, ['blocking']);