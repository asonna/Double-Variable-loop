$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var inputs = ['name1', 'name2', 'street', 'city', 'zip'];
    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    });
      $(".letter").show();

    event.preventDefault();
  });
});

//
// var inputName1 = $("input#name1").val();
// var inputName2 = $("input#name2").val();
// var inputStreet = $("input#street").val();
// var inputCity = $("input#city").val();
// var inputZip = $("input#zip").val();
//
// $(".name1").text(inputName1);
// $(".name2").text(inputName2);
// $(".street").text(inputStreet);
// $(".city").text(inputCity);
// $(".zip").text(inputZip);
