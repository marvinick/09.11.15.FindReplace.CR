describe('findReplace', function() {
  it("checks if a string can be replaced", function() {
    expect(findReplace("and", "and", "or")).to.equal("or");
  })

  it("checks if a word can be replaced in a string", function() {
    expect(findReplace("and go to the market", "market", "stadium")).to.equal("and go to the stadium");
  })

  it("checks if multiple words can be replaced in a string", function() {
    expect(findReplace("go to one market and on to the other market", "market", "stadium")).to.equal("go to one stadium and on to the other stadium");
  })
})

