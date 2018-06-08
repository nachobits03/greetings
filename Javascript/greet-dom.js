var radioButtonOption = document.querySelector(".greetLanguage");
var name = document.querySelector(".nameInput");
var greetButton = document.querySelector(".greet");
var resetButton = document.querySelector(".cleared");
var count = document.querySelector(".count");

 var storedNames = JSON.parse(localStorage.getItem("names"))
var greeter = GreetUser();
var output = document.getElementById("output");
// var greetMe = function(name, language)

var grt = function() {
  var named = document.getElementById('nameInput').value;
  var greetLanguageType;

  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedRadioBtn) {
    greetLanguageType = checkedRadioBtn.value;

  }


  greeter.greetMe(named, greetLanguageType);

localStorage.setItem("names", JSON.stringify(greeter.namesList()));




  output.innerHTML = greeter.respond();
   count.innerHTML = greeter.counter()
  // console.log(named);
};

var clear = function() {
  localStorage.clear();
  document.getElementById("thisDoc").reset();
  document.querySelector("input[name='language']:checked").checked = false;

};

greetButton.addEventListener("click", grt);
resetButton.addEventListener("click", clear);
