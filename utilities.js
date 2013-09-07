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