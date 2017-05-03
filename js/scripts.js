// back end

var vowels = ["a", "e", "i", "o", "u"]




// front-end below

$(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var userInput = $("#user-input").val();

    // add "ay" to a single letter vowel
    if (vowels.includes(userInput)) {
      var userInput = userInput + "ay";
    }

    // add "way" to two or more letter words that begin with a vowel

    else if (userInput.length > 1 && vowels.includes(userInput[0])) {
      var userInput = userInput + "way";
    }
    $("#pig-sentence").text(userInput);
    console.log(userInput.length);


  });


});
