var GreetUser = function(){
  var counter = 0;
  var name = "";
  var greet = "";
var userName = function(input){
  var one = input
  if(one !== ""){
    counter += 1;
  name = input;
}
};
var greetAmount = function(){
  return counter;
};

  var greetMe = function(input){

    if(input == "English"){
      greet = "Hello, ";
  }

   if(input == "Japanese"){
     greet = "Kon'nichiwa, ";
   }

   if(input == "Italian"){
     greet = "Ciao, ";
   }

  };

  var respond = function(){
return greet + name;
};



  return{
    greetMe : greetMe,
    userName : userName,
    greetAmount : greetAmount,
    respond : respond
  };
};
