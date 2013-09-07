/** This file stores the elements in chrome.storage that were
 * submitted via the form in index.html
 */

var document = "index.html";

var w1 = document.getElementsByTagName("website1");
var t1 = document.getElementsByTagName("time1");

chrome.storage.sync.set({'website1': w1}, function()});
chrome.storage.sync.set({'time1': t1}, function()});

chrome.storage.onChanged.addListener(function(changes, namespace){
	for (key in changes) {
	}
    }
   