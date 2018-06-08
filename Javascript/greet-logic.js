var GreetUser = function(storedNames) {

  // initialise namesList from localStorage if there are vales in localStorage
  var storedNamesList = {} || storedNames
  var greet; // <----


  // localStorage.setItem("namesList", JSON.stringify(namesList));


  // var storedNames = JSON.parse(localStorage.getItem("namesList"));


  var greetMe = function(name, language) {
    if (name === "") {
      greet = "Please insert a name"
    }
    var one = name.trim().toUpperCase();

  for (var i = 0; i < one.length; i++) {
      if (isNaN(one[i]) === false) {
        greet = "Make sure your name doesn't contain any numeral values";
      }  if(language === undefined) {
        greet = "Please select a language"
      }


    else if (isNaN(one) === true && language !== undefined) {
      if (storedNamesList[one] === undefined && one !== /^([^0-9]*)$/) {
        storedNamesList[one] = 0

        if (language == "English") {
          greet = "Hello, " + one;
        }

        if (language == "Japanese") {
          greet = "Kon'nichiwa, " + one;
        }

        if (language == "Italian") {
          greet = "Ciao, " + one;
        }
      }
    }
  };
}
  var respond = function() {
    return greet;
  };

var namesList = function(){
  return storedNamesList;
}

  var counter = function() {
    return Object.keys(storedNamesList).length
  }
  return {
    greetMe: greetMe,
    counter: counter,
    respond: respond,
   namesList:namesList
    // //
  };

};
