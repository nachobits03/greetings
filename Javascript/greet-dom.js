var radioButtonOption = document.querySelector(".greetLanguage");
var greetButton = document.querySelector(".greet");
var resetButton = document.querySelector(".cleared");
var count = document.querySelector(".count");
var namesStoredInLocalStorage = JSON.parse(localStorage.getItem("names"));

var greeter = GreetUser(namesStoredInLocalStorage);
// init the counter
count.innerHTML = greeter.counter();

var grt = function() {


  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedRadioBtn) {
    greetLanguageType = checkedRadioBtn.value;

  }
  var greetLanguageType;
  var named = document.getElementById('nameInput').value;
  greeter.greetMe(named, greetLanguageType);


  var output = document.getElementById("output");
  output.innerHTML = greeter.respond();
  count.innerHTML = greeter.counter();
  var namesToStore = JSON.stringify(greeter.namesList())
  localStorage.setItem("names", namesToStore);
};

var clear = function() {
  localStorage.clear();
  document.querySelector("input[name='language']:checked").checked = false;
window.location.reload()
};

greetButton.addEventListener("click", grt);
resetButton.addEventListener("click", clear);
