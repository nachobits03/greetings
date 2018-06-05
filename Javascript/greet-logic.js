var GreetUser = function(storedNameList) {

  // initialise namesList from localStorage if there are vales in localStorage
  var namesList = storedNameList;
  var greet; // <----
  // console.log(namesList);

  // localStorage.setItem("namesList", JSON.stringify(namesList));
  // return Object.keys(namesList).length
  //...
  // var storedNames = JSON.parse(localStorage.getItem("namesList"));


  var greetMe = function(name, language) {
    var lang = language;
    var one = name.toUpperCase();


    for (var i = 0; i < one.length; i++) {

      if (isNaN(one[i]) == false) {
        return "Make sure your name doesn't contain any numeral values";
      }
    }

    if (isNaN(one) == true) {

      if (language == "English") {
        greet = "Hello, " + one;
      }

      if (language == "Japanese") {
        greet = "Kon'nichiwa, " + name;
      }

      if (language == "Italian") {
        greet = "Ciao, " + name;
      }
    }

  };

  var respond = function() {
    return greet;
  };
  //
  // var reseter = function() {
  //   name = ""
  //   greet = ""
  //
  // }
  return {
    greetMe: greetMe,
    // //   greetAmount: greetAmount,
    respond: respond
    // //   reseter: reseter,
    // //
  };

};
