var pageStart = new Date().getTime();

getTracked();
getTimeLeft();
var index = 0;
console.log(chrome.tabs.url);
var url = chrome.tabs.url.match(pattern)[0];

for (var i = 0; i < trackedSites.length; i++) {
	if(trackedSites[i] === url) {
		index = i;
	}
}

var pageTimeAllocation = timeLeft[index];
var timeElapsed = 0;

var timer = setInterval(check, 250);


function check() {
	var timeNow = new Date().getTime();
	timeElapsed = timeNow - pageStart;
	console.log(timeElapsed);
	if (pageTimeAllocation <= timeElapsed) {
		timeOut();
	}
	if (chrome.tabs.active) goneInactive();
}

window.onBeforeUnload = saveTimeLeaving();

function saveTimeLeaving() {
	clearInterval(timer);
	check();
	timeLeft[index] = pageTimeAllocation - timeElapsed;
}

function goneInactive() {
}

function timeOut() {
	clearInterval(timer);
	trackedSites.splice(index, 1);
	chrome.storage.sync.set("tracking", trackedSites);
	getBlocked();
	blockedSites.push(trackedSites[index]);
	chrome.storage.sync.set("blocking", blockedSites);
	chrome.tabs.reload;
}