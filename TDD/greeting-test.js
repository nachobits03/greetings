describe("Testing greeting logic", function(){

it("should return nathri", function(){
  var greet = GreetUser()
  assert.equal(greet.greetMe("Nathri", "English"), "Hello, NATHRI")
})


  it("should greet using selected langauge and name and return 1 name greeted and ignoring blank spaces", function(){
    var greet = GreetUser();
    // greet.userName("")
    // greet.userName("    ")

    /*
    greet.userName("Nathri");
    greet.userName("Nathri");
    greet.userName("Nathri");
    greet.greetMe("English");
    */

      // assert the messge for each
     greet.greetMe("Nathri", "Italian")
     greet.greetMe("Nathri", "English")
     greet.greetMe("Nathri", "Japanese")

    // assert.equal(greet.respond(), "Hello, Nathri");

    // this is cool!
    assert.equal(greet.greetAmount(), 1);
  });

  it("should greet using selected langauge and name and return 2 names greeted", function(){
    var greet = GreetUser();
    assert.equal("Ciao, Thomas", greet.greetMe("Nathri", "Italian"));
    assert.equal("Kon'nichiwa, Thomas", greet.greetMe("Thomas", "Japanese"));
    assert.equal(greet.greetAmount(), 2);
  });

  it("should greet using selected langauge and name and return 3 names greeted", function(){
    var greet = GreetUser(["Nathri", "Thomas", "Samuel"]);
    greet.greetMe("Nathri", "Italian");
    assert.equal(greet.greetAmount(), 3);
  });

  it("should greet using selected langauge and name and return 3 names greeted", function(){
    var greet = GreetUser();
    // greet.greetMe("Nathri", "Italian");
    assert.equal(0, greet.greetAmount());
  });

  it("should greet using selected langauge and name and return 2 names greeted", function(){
    var greet = GreetUser();
    greet.greetMe("Thomas", "Italian");
    greet.greetMe("Nathri", "Italian");
    assert.equal(greet.usersGreeted(), ["Thomas", "Nathri"]);
  });


});
