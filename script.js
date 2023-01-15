// Assignment Code
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var num = "1234567890".split("");
var sym = "~!@#$%^&*()_+{}:<>?".split("");

function generatePassword() {
  var characters = []
  var string = ""
  var passwordLength = prompt("How long would you like your password to be?\n8-128")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128 characters. Please retry!")
    generatePassword()
  } else {
    if (confirm("Would you like uppercase characters in your password?")) {
      characters = characters.concat(upper)
    }
    if (confirm("Would you like lower characters in your password?")) {
      characters = characters.concat(lower)
    }
    if (confirm("Would you like numbers in your password?")) {
      characters = characters.concat(num)
    }
    if (confirm("Would you like symbls in your password?")) {
      characters = characters.concat(sym)
    }
    if (characters.length === 0) {
      alert("You need to choose atleast one character type to create a password. Please retry!")
      generatePassword()
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var randomize = Math.floor(Math.random() * characters.length)
        string += characters[randomize]
      }
      return string
    }
  }
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);