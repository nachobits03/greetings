var GreetUser = function(){

  var namesList = {};
  var name = "";
  var greet = "";
console.log(namesList)

var userName = function(input){
  var one = input.trim();
  var up = one.toUpperCase()
    name = one;

if(isNaN(up) == false ){
return ""
}
 else if (namesList[up] === undefined){
  namesList[up] = 0
}
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("firstname", up);
  }
};

var greetAmount = function(){
  return Object.keys(namesList).length
};

  var greetMe = function(input){

    if(input == "English"){
      greet = "Hello, "
  }

   if(input == "Japanese"){
     greet = "Kon'nichiwa, "
   }

   if(input == "Italian"){
     greet = "Ciao, "
   }

  };

  var respond = function(){
    if(isNaN(name) == true){
return greet + name;
}


else if(name == "" && greet !== ""){
  return "Please Insert a name to be greeted"
}

else if (greet == "" && name !== ""){
  return "Please Select Language to be greeted in"
}

else if (name == "" && greet == "") {
  return "Select Language and Insert name to be greeted"
}

else if (isNaN(name) == false){
  return "Please make sure your name doesnt contain any Numbers"
}


}

var reseter = function(){
  name = ""
  greet = ""

}
  return{
    greetMe : greetMe,
    userName : userName,
    greetAmount : greetAmount,
    respond : respond,
    reseter : reseter
  };
};
