function saveChanges() {
  console.log("hay1");
  // Get a value saved in a form.
  var website = website0.value;
  // Check that there's some code there.
  console.log("hay2");
  if (!website) {
    console.log('Error: No value specified');
    return;
  }
  console.log("hay3");

  // var websites = [];
  // for (var i = 0; i < counter; i++) {

  // }

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({"websites": website}, function() {
    // Notify that we saved.
    console.log('Settings saved');
  });
}

function pullOut() {
  var message = chrome.storage.sync.get("websites",function(){});
  console.log(message);
}

$('#submit').click(function(){
  saveChanges();
  pullOut();
});
