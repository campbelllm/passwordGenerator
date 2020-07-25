// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "`"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userInputs = {
  passwordLength: null,
  lower: null,
  upper: null,
  numeric: null,
  special: null
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLengthPrompt = prompt("Length of password? (between 8-128)");
  validateLength(passwordLengthPrompt);
  var lowercasePrompt = prompt("Include lowercase letters?");
  validateLowerCase(lowercasePrompt);
  var uppercasePrompt = prompt("Include uppercase letters?");
  validateUpperCase(uppercasePrompt);
  var numericPrompt = prompt("Include numbers?");
  validateNumeric(numericPrompt);
  var specialPrompt = prompt("Include special characters?");
  validateSpecial(specialPrompt);
  console.log(userInputs);
  return finalPassword();
 
};

function validateLength(value) {
  var input = parseInt(value);
  if (input > 7 && input < 129) {
    userInputs.passwordLength = input;
  } else {
    alert("invalid try again")
    return false;
  }
};

function validateLowerCase(value) {
  var input = value.toLowerCase();
  if (input === 'yes') {
    userInputs.lower = true;
  } else if (input === 'no') {
    userInputs.lower = false;
  }
};

function validateUpperCase(value) {
  var input = value.toLowerCase();
  if (input === 'yes') {
    userInputs.upper = true;
  } else if (input === 'no') {
    userInputs.upper = false;
  }
};

function validateNumeric(value) {
  var input = value.toLowerCase();
  if (input === 'yes') {
    userInputs.numeric = true;
  } else if (input === 'no') {
    userInputs.numeric = false;
  }
};

function validateSpecial(value) {
  var input = value.toLowerCase();
  if (input === 'yes') {
    userInputs.special = true;
  } else if (input === 'no') {
    userInputs.special = false;
  }
};

function finalPassword() {
  var password = "";
  for (var i = 0; password.length < userInputs.passwordLength-1; i++) {
    
    if (userInputs.lower === true) {
      var random = Math.floor(Math.random() * lowerCaseLetters.length)
       password += lowerCaseLetters[random];
    }
    if (userInputs.upper === true) {
      var random = Math.floor(Math.random() * upperCaseLetters.length)
      password += upperCaseLetters[random];
    }
    if (userInputs.numeric === true) {
      var random = Math.floor(Math.random() * numeric.length)
      password += numeric[random];
    }
    if (userInputs.special === true) {
      var random = Math.floor(Math.random() * specialCharacters.length)
      password += specialCharacters[random];
    }
  }
  return password;
};



