$(document).ready(function() {
  $("#formSubmission").submit(function (event) {
    event.preventDefault();
      $('.results').show();

      var number1Input = parseInt($("#number1").val());
      var number2Input = parseInt($("#number2").val());

      // var divisions = Math.round(number2Input / number1Input);


      for (var index = number1Input; index <= number2Input; index += number1Input) {
        $('.answer').append(index + ", ");
      };



  		$(".number1").text(number1Input);
      $(".number2").text(number2Input);


      })
    });
