var findReplace = function(sentence, word, altWord) {
  var splitSentence = sentence.split(" ");
  var alt = /[\w+\s?,.!""]/ig;

  for(var i=0; i < splitSentence.length; i++) {
    if(splitSentence[i] === word) {
      splitSentence[i] = altWord;
    }
  }
  sentence = sentence.replace(alt);
  sentence = splitSentence.join(" ");
  return sentence;
};


$(document).ready(function() {
  $("#findReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var word = $("input#word").val();
    var altWord = $("input#altWord").val();
    var result = findReplace(sentence, word, altWord);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});

$(document).ready(function(){
  $("#findReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var findWord = $("input#wordFind").val();
    var replaceWord = $("input#wordReplace").val();
    var result = findReplace(sentence, findWord, replaceWord);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
