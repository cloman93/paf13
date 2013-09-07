var rule = {
  conditions: [
    new chrome.declarativeWebRequest.RequestMatcher({
      url: { hostSuffix: 'google.com' } })
  ],
  actions: [
    new chrome.declarativeWebRequest.RedirectRequest({
    	redirectUrl: "http://www.facebook.com"
    })
  ]};

  chrome.declarativeWebRequest.onRequest.addRules([rule]);