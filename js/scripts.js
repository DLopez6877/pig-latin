// back-end
var translate = function(sentence) {
  return false;
}


// front-end below

$(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var pigSentence = translate(sentence);

    $("#pig-sentence").text(pigSentence);
  });


});
