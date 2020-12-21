// Assignment code here

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "?", "@", "_", "`", "{", "|", "}", "~"];
var characters = [];
console.log(characters);

var lengthPrompt = window.prompt("How many characters long do you want your password to be?");

if (lengthPrompt < 8 || lengthPrompt > 128) {
  window.alert("Please choose a password length between 8 and 128 characters.");
} 
else {

}

var specialCharConfirm = window.confirm("Do you want to include special characters in your password?");
if (specialCharConfirm) {
  characters.push(specialChar)
}

var numbersConfirm = window.confirm("Do you want to include numbers in your password?");
if (numbersConfirm) {
  characters.push(numbers)
}

var lowerCaseConfirm = window.confirm("Do you want to include lower case letters in your password?");
if (lowerCaseConfirm) {
  characters.push(lowerCase)
}

var upperCaseConfirm = window.confirm("Do you want to include uppercase letters in your password?");

if (upperCaseConfirm) {
  characters.push(upperCase)
}










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
