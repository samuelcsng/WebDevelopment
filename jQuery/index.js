$("h1").css("color", "blue");

$("button").html("<em>clickclick me</em>");

// $("h1").addClass("big-letter");


var timestamp = 0;
for (var i=1; i<3; i++){
  timestamp+=1000;
  setTimeout(function() {
    $("h1").addClass("big-letter")
  }, timestamp);

  timestamp+=1000;
  setTimeout(function() {
    $("h1").removeClass("big-letter")
  }, timestamp);
}

$("a").attr("href","https://www.yahoo.com");

$("h1").click(function(){$("h1").css("color","yellow")});

$(document).keydown(function(event){$("h1").text(event.key)})
