$(document).ready(function(event) {
  $("#animal").change(function(){
    var animal = $("#animal").val();

    if (animal === "eagles1"){
      $("#eagles").show();
      $("#bears").hide();
      $("#snakes").hide();

  }else if (animal === "snakes1"){
    $("#snakes").show();
    $("#bears").hide();
    $("#eagles").hide();

  }else if (animal === "bears1"){
    $("#bears").show();
    $("#eagles").hide();
    $("#snakes").hide();
  }
  });
  event.preventDefault();
});
