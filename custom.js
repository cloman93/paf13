// Utilities function that isn't accessible
var trackedSites = getTracked();

function getTracked() {
  chrome.storage.sync.get("tracking", function(callback){
  console.log("rebuilding tracked sites array");
    console.log(callback.tracking);
    trackedSites = callback.tracking;
  });
}

// Autopopulate if data exists
if (trackedSites.length > 0) {
  for (var i = 0; i < trackedSites.length; i++) {
    console.log("tracked sites array > 0");
    var field = "<div class=\"form-inline finalformentry\" style=\"margin-bottom: 5px;\"><div class=\"form-group website\"><input type=\"text\" class=\"form-control\" id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 290px; height: 50px; text-align: center;\"></div> <div class=\"form-group time\"><input type=\"text\" class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\" style=\"width: 100px; height: 50px; text-align: center;\"></div></div>"
    counter++;
    $("#rightform").append(field).val(trackedSites[i]);
  }
} else {
  console.log(trackedSites.length);
}

// Click handler to live check the Dom
$('#submit').on('click', function(){
  chrome.storage.sync.clear();
  saveInfo();

});


var blockedWebsites = [];

// Save the info the user inputs on the site
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
    } // } else if (counter !== 1) {
    //   $(this).remove();
    // }
  });

<<<<<<< HEAD
  // Regex match out
=======
>>>>>>> upstream/master
  var siteMatch = [];
  var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i;
  websites.forEach(function(s) {
    var print = s.match(pattern)[0];
    console.log(print)
    siteMatch.push(print);
  });

  // Save to chrome sync
  if (siteMatch.length === times.length && siteMatch.length > 0) {
    chrome.storage.sync.set({"tracking": siteMatch, "time": times}, function() {});

    // Add extra form if the current form is full
    if (counter == siteMatch.length) {
      $("#rightform").append("<div class=\"form-inline finalformentry\" style=\"margin-bottom: 5px;\"><div class=\"form-group website\"><input type=\"text\" class=\"form-control\" id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 290px; height: 50px; text-align: center;\"></div> <div class=\"form-group time\"><input type=\"text\" class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\" style=\"width: 100px; height: 50px; text-align: center;\"></div></div>");
      counter++;
    } else {
      for (var i = 0; i < (counter - siteMatch.length - 1); i++) {
        $(".finalformentry div:last").parent().remove();
      }
    }

    // Lock the user's input
    $('.website input').each(function(index) {
      if ($(this).val() != "") {
        $(this).attr('readonly', true)
      }
    });

    $('.time input').each(function(index) {
      if ($(this).val() != "") {
        $(this).attr('readonly', true)
      }
    });
  }

}

// Pull websites off of Chrome sync
function pullOff() {
  chrome.storage.sync.get(["tracking", "time"],function(message){
      console.log(message.tracking + " : " + message.time);
  });
}

// Initializing the form field counter
var counter = 1;

// Add form fields on click
$("#add").click(function() {
  var field = "<div class=\"form-inline finalformentry\" style=\"margin-bottom: 5px;\"><div class=\"form-group website\"><input type=\"text\" class=\"form-control\" id=\"website" + counter + "\" placeholder=\"Website\" style=\"width: 290px; height: 50px; text-align: center;\"></div> <div class=\"form-group time\"><input type=\"text\" class=\"form-control\" id=\"time" + counter + "\" placeholder=\"Time\" style=\"width: 100px; height: 50px; text-align: center;\"></div></div>"
  counter++;
  $("#rightform").append(field)
});

<<<<<<< HEAD
// Remove form fields on click
=======

// Remove form fields on click

>>>>>>> upstream/master
$("#minus").click(function() {
  if (!$(".finalformentry div:last").attr("readonly")) {
    $(".finalformentry div:last").parent().remove();
  }
});
<<<<<<< HEAD

// // Regex for site blocker
// var pattern = /[A-z0-9]+\.(com|edu|org|net|xxx|gov|mil|biz|info|mobi|post|pro|ly|io|im|us)/i
// sites.forEach(function(s) {
//   var print = s.match(pattern)[0];
//   s = "*://*." + print + "/*";
//   console.log(s);
// });
=======
>>>>>>> upstream/master
