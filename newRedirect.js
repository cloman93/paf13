function getBlockedSites() {
  var sites = [];
  chrome.storage.sync.get("websites", function(message){
    message.forEach(s) {
      sites.push(s);
      console.log(s);
    }
  })
  console.log(sites);
  return sites;
}

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log(info);
	return {redirectUrl: "https://www.google.com"};
  },
  // filters
  {urls: getBlockedSites()
  },
  // extraInfoSpec
  ["blocking"]);
