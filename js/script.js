// Assignment code here
var lettersU =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']



function generatePassword () {
  var activate = document.getElementById("generate");
  var storePW = ""
  

  alert("Password must me no less than 8 characters and no more than 128 characters\nPlease be sure to answer all of the question from the prompt to get your new password");

  var length = prompt("Please enter the length of passsword you would like to have./n(min 8 character. max 128 character.\n If you type less than 8 character it will automatically adjust to 8 character. \n If you type more than 128 character, it will adjust to 128 character. ");
  if (+length < 8) {
    length = 8;
  }else if (+length > 128) {
    length = 128;
  }

  var upperCase = prompt("Include upper case? 'Y or N' ");
  if (upperCase === 'Y') {
    storePW += lettersU[Math.floor(Math.random() * lettersU.length)];
  } 
  


  var numeric = prompt("Include number? 'Y or N' ");
  if (numeric === 'Y') {
    storePW += numbers[Math.floor(Math.random() * numbers.length)];
  }

  var specialChar = prompt("Include special character? 'Y or N' ");
  if (specialChar === "Y") {
     storePW += symbols[Math.floor(Math.random() * symbols.length)];
  } 

  for (x = storePW.length; x !== +length; x++) {
    storePW += lettersL[Math.floor(Math.random() * lettersL.length)];
  }

  var shuffled = storePW.split('').sort(function(){return 0.5-Math.random()}).join('');

 return shuffled;
 

 
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
