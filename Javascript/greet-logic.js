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
else{
  return "Insert name to be greeted and make sure Language has been chosen"
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
