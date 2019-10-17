var GreetUser = function(storedNames) {


  var storedNamesList = storedNames || {};
  var greet; // <----


  var greetMe = function(inName, language) {
    var name = inName.trim().toUpperCase();


    for (var i=0; i<name.length;i++){
       if (!isNaN(name[i]) || name[i] == " "){
        greet = "Your name cannot contain any numbers";
        return;
      }
    }

if (name === ""){
  greet = "Insert a Name";
  return;
}

else if (name !== "" && language === undefined){
  greet = "Select a Language";
  return;
}

    if (isNaN(name) === true && language !== undefined) {
      if (storedNamesList[name] === undefined) {
        storedNamesList[name] = 0;
      }

      if (Language.ENGLISH.equals(language)) {
        greet = `${Language.ENGLISH.getGreeting()}!, ${name}`;

      }

      else if (Language.JAPANESE.equals(language)) {
        greet = `${Language.JAPANESE.getGreeting()}!, ${name}`;
      }

      else if (Language.ITALIAN.equals(language)) {
        greet = `${Language.ITALIAN.getGreeting()}!, ${name}`;
      }
    }
  };

  var respond = function() {
    return greet;
  };

  var namesList = function() {
    return storedNamesList;
  };

  var counter = function() {
    return Object.keys(storedNamesList).length;
  };
  return {
    greetMe: greetMe,
    counter: counter,
    respond: respond,
    namesList: namesList

  };

};
