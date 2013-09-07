function getBlockedSites() {
	var sites = [];
	chrome.storage.sync.get("websites", function(message){
		sites = message;
	})
	return sites;
}