var GreetUser = function(storedNames) {


  var storedNamesList = storedNames || {};
  var greet; // <----



  var greetMe = function(name, language) {
    var one = name.trim().toUpperCase();

if (one === ""){
  greet = "Insert a Name"
}
else if (isNaN(name) === false){
  greet = "Your name cannot contain any numbers"
}
else if (one !== "" && language === undefined){
  greet = "Select a Language"
}

    if (isNaN(one) === true && language !== undefined) {
      if (storedNamesList[one] === undefined) {
        storedNamesList[one] = 0
      }

      if (language == "English") {
        greet = "Hello, " + one;
      }

      else if (language == "Japanese") {
        greet = "Kon'nichiwa, " + one;
      }

      else if (language == "Italian") {
        greet = "Ciao, " + one;
      }
    }
  };



  var respond = function() {
    return greet;
  };

  var namesList = function() {
    return storedNamesList;
  }

  var counter = function() {
    return Object.keys(storedNamesList).length
  }
  return {
    greetMe: greetMe,
    counter: counter,
    respond: respond,
    namesList: namesList


  };

};
