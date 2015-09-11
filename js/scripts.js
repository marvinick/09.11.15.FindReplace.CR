var inputSentence = function(input) {
  return input;
}

var findReplace = function(sentence, word, altWord) {
  var splitSentence = sentence.split(" ");
  var re = /[\w+\s?,.!""]/ig;

  for(var i=0; i < splitSentence.length; i++) {
    if(splitSentence[i] === word) {
      splitSentence[i] = altWord;
    }
  }
  sentence = sentence.replace(re);
  sentence = splitSentence.join(" ");
  return sentence;
};

var findReplace = function(sentence, findWord, replaceWord) {
  var splitString = sentence.split(" ");
  var re = /[\w+\s?,.!""]/ig;

  for(var i=0; i < splitString.length; i++) {
    if(splitString[i] === findWord) {
      splitString[i] = replaceWord;
    }
  }
  sentence = sentence.replace(re);
  sentence = splitString.join(" ");
  return sentence;
};



// str = "Test abc test test abc test...".split("abc").join("");
// str.split(search).join(replacement)


// var romanNumeral = function(number) {

//   var list = { "M":1000,
//               "CM":900,
//                "D":500,
//               "CD":400,
//                "C":100,
//               "XC":90,
//                "L":50,
//               "XL":40,
//                "X":10,
//               "IX":9,
//                "V":5,
//               "IV":4,
//                "I":1
//               };
//     var roman = '';
//     var i;

//     for ( i in list ) {
//       while ( number >= list[i] ) {
//         roman += i;
//         number -= list[i];
//      }
//     }
//     return roman;
// }

// $(document).ready(function() {
//   $("form#countupby").submit(function(event) {
//     var number = parseInt($("input#number").val());
//     var roman = romanNumeral(number);

//     $(".number").text(number);
//     $(".result").text(roman);

//     $("#result").show();
//     event.preventDefault();
//   });
// });