describe("Testing greeting logic", function(){
  it("should greet using selected langauge and name", function(){
    var greet = GreetUser();
    // greet.userName("")
    // greet.userName("    ")
    greet.userName("Nathri");
    greet.greetMe("English");
    assert.equal(greet.respond(), "Hello, Nathri");
    assert.equal(greet.greetAmount(), 1);
  });

  it("should greet using selected langauge and name", function(){
    var greet = GreetUser();
    greet.userName("Nathri");
      greet.userName("Thomas");
    greet.greetMe("Japanese");
    assert.equal(greet.respond(), "Kon'nichiwa, Thomas");
    assert.equal(greet.greetAmount(), 2);
  });

  it("should greet using selected langauge and name", function(){
    var greet = GreetUser();
    greet.userName("Nathri");
    greet.userName("Thomas");
    greet.userName("David");
    greet.greetMe("Italian");
    assert.equal(greet.respond(), "Ciao, David");
    assert.equal(greet.greetAmount(), 3);
  });
});
