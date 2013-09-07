chrome.webRequest.onBeforeRequest.addListener(
<<<<<<< HEAD
function(info) {
  console.log(info);
return {redirectUrl: "https://www.google.com"};
},
// filters
{
  urls: [
  "*://*.facebook.com/*"
  ]
},
// extraInfoSpec
["blocking"]);
=======
  function(info) {
    console.log(info);
	return {redirectUrl: "https://www.google.com"};
  },
  // filters
  {urls: getBlockedSites()
  },
  // extraInfoSpec
  ["blocking"]);
>>>>>>> upstream/master
