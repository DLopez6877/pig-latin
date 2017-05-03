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

    //words starting with one consonant before a vowel move the consonant to the end and add "ay"

    // make a loop that (checks if the first letter is a consonant)
    // {move that consonant to the end}

for (var index = 0; value of current index = one of the vowells; index += 1){
  var x = slice out all index values so far and store them in a varable
}


  });


});
