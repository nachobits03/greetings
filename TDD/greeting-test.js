describe("Testing greeting logic", function() {

  it("should return nathri", function() {
    var greet = GreetUser();
    greet.greetMe("Nathri", "English");
    assert.equal(greet.respond(), "Hello, Nathri");
  });


  it("should greet 1 name in three languaages and return 1 name", function() {
    var greet = GreetUser();

    greet.greetMe("Nathri", "Italian");
    greet.greetMe("Nathri", "English");
    greet.greetMe("Nathri", "Japanese");

    assert.equal(greet.respond(), "Kon'nichiwa, Nathri");
    assert.equal(greet.counter(), 1);
  });

  it("should greet using selected langauge and name and return 2 names greeted", function() {
    var greet = GreetUser();
    greet.greetMe("Nathri", "Italian");
    greet.greetMe("Thomas", "Japanese");
    assert.equal(greet.respond(), "Kon'nichiwa, Thomas");
    assert.equal(greet.counter(), 2);
  });

  it("should return 3 names already in storage", function() {
    var greet = GreetUser(["NATHRI", "THOMAS", "SAMUEL"]);
    assert.equal(greet.counter(), 3);
  });

  it("should return 5 names greeted", function() {
    var greet = GreetUser(["NATHRI", "SANDY", "AKUMA", "ROBERT"]);
    greet.greetMe("David", "Italian");
    assert.equal(5, greet.counter());
  });



});
