$(document).ready(function() {
  $("#formOne").submit(function(event) {

    event.preventDefault();

    var total = 0;
    var nameInput = $("input#name").val();
    var question1Input = parseInt($("select#question1").val());
    var question2Input = parseInt($("select#question2").val());
    var question3Input = parseInt($("select#question3").val());
    var question4Input = parseInt($("select#question4").val());
    var question5Input = parseInt($("select#question5").val());

    $(".name").text(nameInput);

    total = question1Input + question2Input + question3Input + question4Input + question5Input;

    if (total <= 7) {
      $("#csharpResult").show()
      $("#javaResult").hide()
      $("#phpResult").hide()
      $("html, body").animate ({
        scrollTop: $("#csharpResult").offset().top
      }, 2000);
    } else if (total <= 12) {
      $("#javaResult").show()
      $("#csharpResult").hide()
      $("#phpResult").hide()
      $("html, body").animate ({
        scrollTop: $("#javaResult").offset().top
      }, 2000);
    } else {
      $("#phpResult").show()
      $("#csharpResult").hide()
      $("#javaResult").hide()
      $("html, body").animate ({
        scrollTop: $("#phpResult").offset().top
      }, 2000);
    }

  });
});
