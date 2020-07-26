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
// Defining validation
function validateLength(value) {
  var input = parseInt(value);
  if (input > 7 && input < 129) {
    userInputs.passwordLength = input;
    return true;
  } else {
    alert("invalid try again")
    return false;
  }
};

function validateInput(value, key) {
  var input = value.toLowerCase();
  if (input === 'yes') {
    userInputs[key] = true;
  } else if (input === 'no') {
    userInputs[key] = false;
  }else{
    alert("invalid try again")
    return null;
  }
  return true;
};


// Selecting random characters

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

// Prompts and using validation
function generatePassword() {
  var passwordLengthPrompt = prompt("Length of password? (between 8-128)");
  var lengthValid = validateLength(passwordLengthPrompt);
  if(!lengthValid) return null;

  var lowercasePrompt = prompt("Include lowercase letters?");
  var lowercaseValid = validateInput(lowercasePrompt, 'lower');
  if(!lowercaseValid) return null;
  
  var uppercasePrompt = prompt("Include uppercase letters?");
  var uppercaseValid = validateInput(uppercasePrompt, 'upper');
  if(!uppercaseValid) return null;
  
  var numericPrompt = prompt("Include numbers?");
  var numericValid = validateInput(numericPrompt, 'numeric');
  if(!numericValid) return null;

  var specialPrompt = prompt("Include special characters?");
  var specialValid = validateInput(specialPrompt, 'special');
  if(!specialValid) return null;
  
  console.log(userInputs);
  return finalPassword();
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

