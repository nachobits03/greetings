var radioButtonOption = document.querySelector(".greetLanguage");
var name = document.querySelector(".nameInput");
var greetButton = document.querySelector(".greet");
var count = document.querySelector(".count");
// var output = document.querySelector(".output");

var greeter = GreetUser();



var grt = function(){
   var named = document.getElementById('nameInput').value;
   var greetLanguageType;
   
var checkedRadioBtn = document.querySelector("input[name='language']:checked");
   if (checkedRadioBtn){
    greetLanguageType = checkedRadioBtn.value;
    greeter.userName(named);
}


greeter.greetMe(greetLanguageType);

var value = greeter.greetAmount();
var greeted = greeter.respond();
var output = document.getElementById("output");
output.innerHTML = greeted;
count.innerHTML = value;
console.log(named);
};

greetButton.addEventListener("click", grt);
