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

//console.log("running...");
chrome.webRequest.onBeforeRequest.addListener(blockSite, {urls: ["*://*/*"]}, ['blocking']);