// Assignment code here
const name = document.getElementById('password');


var lowerCaseCharectersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCaseCharecrersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialCharectersArray = ['!','@','#','$','%','^','&','*','(',')'];

var numbersArray = ['0','1','2','3','4','5','6','7','8','9'];

var upperCase, lowerCase, specialCharecters, numbers;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function init(){
  lowerCaseBoolean = confirm('do you want lower case charecters in your password?')

  upperCaseBoolean = confirm('do you want upper case letters in your password?')

  specialCharectersBoolean = confirm('do you want special charecters in your password?')

  numberBoolean = confirm('do you want numbers in your password?')

  if (lowerCaseBoolean === true){
    lowerCase = (lowerCaseCharectersArray[Math.random() * 6]);
  }

  if (upperCaseBoolean === true){
    upperCase = (upperCaseCharecrersArray[Math.random() * 6]);
  }

  if (specialCharectersBoolean === true){
    specialCharecters = (specialCharectersArray[Math.random() * 6]);
  }

  if (numberBoolean === true){
    numbers = (numbersArray[Math.random() * 6]);
  }
}

function generatePassword(){
  let password = "";
  for (var i = 0; i <length; i++){
    password += (
      math.floor(math.random() * upperCaseCharecrersArray, lowerCaseCharectersArray, specialCharectersArray, numbersArray )
    );
    return init;
  }
}
  
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  if(lowerCase === true){
    passwordText.value = password;
  }

  if (upperCase === true){
    passwordText.value = password;
  }

  if(specialCharecters = true){
    passwordText.value = password;
  }

  if(numbers === true){
  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
