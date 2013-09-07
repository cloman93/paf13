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
  var siteMatch = [];
  var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;
  websites.forEach(function(s) {
    var print = s.match(pattern)[0];
    print = "*://*." + print + "/*";
    console.log(print)
    siteMatch.push(print);
  });



  // Save to chrome sync
  chrome.storage.sync.set({"websites": siteMatch, "times": times}, function() {
      console.log('websites & times have been saved');
  });
}

function pullOut() {
  // Pull websites off of Chrome sync
  chrome.storage.sync.get(["websites", "times"],function(message){
      console.log(message.websites + " : " + message.times);
  });
}

// Add form fields on click
$("#add").click(function() {
  var counter = 1;
  var field = "<div class=\"form-inline\" style=\"margin-top: 20px;\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\"id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 350px;text-align: center;\"></div><div class=\"form-group\"><input type=\"text\"class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\"style=\"width: 120px; text-align: center;\"></div></div>";
  counter++;
  console.log('field added');
  $("#rightform div:last").append(field);
  console.log('field');
});

