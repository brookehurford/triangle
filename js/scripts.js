var triangle = function(A, B, C) {
  if (((A + B) <= C) || ((A + C) <= B) || ((B + C) <= A)) {
    return false;
  }
  else if (A === B && B === C) {
    return true;
  }
  else if (A === B || B === C || A === C) {
    return true;
  }
  else  {
    return true;
  }
};

$(document).ready(function(){
  $("form#triangle-form").submit(function(event) {
    var A = parseInt($("input#sideA").val());
    var B = parseInt($("input#sideB").val());
    var C = parseInt($("input#sideC").val());
    var result = triangle(A, B, C);

    $("#result").hide();
    $("#error").hide();

    if (isNaN(A, B, C)) {
      $("#error").show();
    }
    else if (!result) {
      $("#result").show();
      $(".triangleType").hide();
      $(".not").text("not a ");
    }
    else if (A === B && B === C) {
      $("#result").show();
      $(".triangleType").show();
      $(".not").text("");
      $(".triangleType").text("an equilateral ");
    }
    else if (A === B || B === C || A === C) {
      $("#result").show();
      $(".triangleType").show();
      $(".not").text("");
      $(".triangleType").text("an isosceles ");
    }
    else {
      $("#result").show();
      $(".triangleType").show();
      $(".not").text("");
      $(".triangleType").text("a scalene ");
    }

    event.preventDefault();
  });
});
