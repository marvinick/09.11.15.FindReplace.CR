var inputSentence = function(input) {
  return input;
}

var findReplace = function(input) {
  var altword = "and go to the stadium"
  var altinput = input.replace(input, altword);
  return altinput;
}




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