// Click handler to live check the Dom
$('#submit').on('click', function(){
  chrome.storage.sync.clear();
  saveInfo();
  pullOut();
});

function saveInfo() {
  // Fill arrays with blocked websites & times
  var websites = [];
  var times = [];
  // Websites
  $('.website input').each(function(index) {
    if ($(this).val() != "") {
      websites.push($(this).val());
    }
  });
  // Times
  $('.time input').each(function(index) {
    if ($(this).val() != "") {
      times.push($(this).val());
    }
  });

  // Save to chrome sync
  chrome.storage.sync.set({"websites": websites, "times": times}, function() {
      console.log('websites & times have been saved');
  });
}

function pullOut() {
  // Pull websites off of Chrome sync
  chrome.storage.sync.get(["websites", "times"],function(message){
      console.log(message.websites + " : " + message.times);
  });
}

$("#add").on("click", function() {
  // Add form fields on click
  var counter = 1;
  var field = "<div class=\"form-inline\" style=\"margin-top: 20px;\"><divclass=\"form-group\"><input type=\"text\" class=\"form-control\"id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 350px;text-align: center;\"></div><div class=\"form-group\"><input type=\"text\"class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\"style=\"width: 120px; text-align: center;\"></div></div>";
  counter++;
  console.log('field added');
  $("#rightform first:div").append(field);
  console.log('field');
});
