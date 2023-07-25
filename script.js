// Assignment code here
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_-+=<>?/{}~";

function generatePassword() {
var passwordLength = prompt("Choose password length (between 8 and 128 characters):");

// Validate password length
 if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
 }
 var confirmLower = confirm("Include lowercase characters?");
 var confirmUpper = confirm("Include uppercase characters?");
 var confirmNumber = confirm("Include numeric characters?");
 var confirmSpecial = confirm("Include special characters?");

 // Validate that at least one character type is selected
 if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("Please select at least one character type.");
    return;
 }
 var allowedChars = "";
 if (confirmLower) {
   allowedChars += lowerCase;
 }
  if (confirmUpper) {
      allowedChars += upperCase;
  }
  if (confirmNumber) {
      allowedChars += numbers;
  }
  if (confirmSpecial) {
       allowedChars += special;
  }

 var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_-+=<>?/{}~";

function generatePassword() {
    var passwordLength;
    do {
      passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
      if (!passwordLength) {
        alert("Required value");
      } else if (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8 and 128");
      }
    } while (!passwordLength || passwordLength < 8 || passwordLength > 128);
    var confirmLower = confirm("Will this contain lowercase letters?");
    var confirmUpper = confirm("Will this contain uppercase letters?");
    var confirmNumber = confirm("Will this contain numbers?");
    var confirmSpecial = confirm("Will this contain special characters?");
    
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
       alert("You must choose at least one criteria.");
       return;
    }
    var userChoices = "";
    if (confirmLower) {
       userChoices += lowerCase;
    }
    if (confirmUpper) {
        userChoices += upperCase;
    }
    if (confirmNumber) {
        userChoices += numbers;
    }
    if (confirmSpecial) {
      userChoices += special;
    }
    
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * userChoices.length);
      password += userChoices[randomIndex];
    }
    
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }
  }