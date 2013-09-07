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
