var radioButtonOption = document.querySelector(".greetLanguage");
var name = document.querySelector(".nameInput");
var greetButton = document.querySelector(".greet");
var count = document.querySelector(".count");
var output = document.querySelector(".output");

var greeter = GreetUser();

var named = name.value;
var greetLanguageType;

var grt = function(){

var checkedRadioBtn = document.querySelector("input[name='radioButtonOption']:checked");
   if (checkedRadioBtn){
    greetLanguageType = checkedRadioBtn.value;
}

greeter.userName(name);
greeter.greetMe(greetLanguageType);

var value = greeter.greetAmount();
var greeted = greeter.respond();
output.innerHTML = greeted;
count.innerHTML = value;
console.log(named);
};

greetButton.addEventListener("click", grt);
