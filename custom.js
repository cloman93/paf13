$('#submit').click(function(){
  saveChanges();
  pullOut();
});

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

var counter = 1;
    console.log("hi1");

    $("#add").click(function() {
    console.log("hi2");

    var field = "<div class=\"form-inline\" style=\"margin-top: 20px;\"> <div class=\"form-group\"><input type=\"text\" class=\"form-control\"id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 350px; text-align: center;\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\" style=\"width: 120px; text-align: center;\"></div></div>";

    console.log("hi3");

    counter++;

    $("#rightform div:first").append(field).fadeIn();

    console.log("hi4");

    });

function pullOut() {
  chrome.storage.sync.get("websites",function(message){
      console.log(message.websites);
  });
}
