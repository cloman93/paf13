// Click handler to live check the Dom
$('#submit').on('click', function(){
  chrome.storage.sync.clear();
  saveInfo();
  pullOff();
});

var blockedWebsites = [];

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
      var temp = parseInt($(this).val()) * 60000;
      times.push(temp);
    }
  });

  var siteMatch = [];
  var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;
  websites.forEach(function(s) {
    var print = s.match(pattern)[0];
    console.log(print)
    siteMatch.push(print);
  });

  // Save to chrome sync
  chrome.storage.sync.set({"tracking": websites, "time": times}, function() {
  });
}

// Pull websites off of Chrome sync
function pullOff() {
  chrome.storage.sync.get(["tracking", "time"],function(message){
      console.log(message.tracking + " : " + message.time);
  });
}

// Add form fields on click
$("#add").click(function() {
  var counter = 5;
  var field = "<div class=\"form-inline finalformentry\" style=\"margin-bottom: 5px;\"><div class=\"form-group website\"><input type=\"text\" class=\"form-control\" id=\"website0\" placeholder=\"Website\" style=\"width: 290px; height: 50px; text-align: center;\"></div> <div class=\"form-group time\"><input type=\"text\" class=\"form-control\" id=\"time0\" placeholder=\"Time\" style=\"width: 100px; height: 50px; text-align: center;\"></div></div>"
  counter++;
  $("#rightform").append(field)

});


// Remove form fields on click

$("#minus").click(function() {
  $(".finalformentry div:last").parent().remove();
});
