
describe('findReplace', function() {
  it("checks if the user able to input a word", function() {
    expect(findReplace("and")).to.equal("and");
  })

  it("checks if user is able to input a sentence", function() {
    expect(findReplace("and go to the market")).to.equal("and go to the market");
  })
})


// describe('romanNumeral', function() {
//   it("checks if single digit is turned into roman", function() {
//     expect(romanNumeral(5)).to.equal('V');
//   })
//   it("checks if double digits are turned into roman", function() {
//     expect(romanNumeral(77)).to.equal("LXXVII");
//   })
//   it("checks if double digits are turned into roman", function() {
//     expect(romanNumeral(999)).to.equal("CMXCIX");
//   })

//   // it("checks if count_by does not exceed equal to", function() {
//   // expect(countUpBy(10,104)).to.eql([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
//   // })

// })