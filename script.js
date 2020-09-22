// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function generatePassword() { 
  var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",")
  var lowerCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".toLowerCase().split(",")
  var specialCharacters = "!,@,#,$,%,^,&,*,(,)".split(",")
  var numbers = "1,2,3,4,5,6,7,8,9,0".split(",")
  var chosenCharacters = []
  var passwordLength = prompt("How many characters do you want your password to be");
  var promptSpecial = confirm("Do you want special Characters? ('OK' for YES or 'Cancel' for No");
  var promptUpper = confirm("Do you want uppercase? (Y or N)");
  var promptLower = confirm("Do you want lowercase? (Y or N)");
  var promptNumber = confirm("Do you want numbers? (Y or N)");
  var password = "";

 if (promptUpper){
   for (let i = 0; i < upperCase.length; i++) {
     chosenCharacters.push(upperCase[i])
     }
     console.log(chosenCharacters)
 }
 if (promptLower){
  for (let i = 0; i < lowerCase.length; i++) {
    chosenCharacters.push(lowerCase[i])
    }
    console.log(chosenCharacters)
}
if (promptSpecial){
  for (let i = 0; i < specialCharacters.length; i++) {
    chosenCharacters.push(specialCharacters[i])
    }
    console.log(chosenCharacters)
}
if (promptNumber){
  for (let i = 0; i < numbers.length; i++) {
    chosenCharacters.push(numbers[i])
    }
    console.log(chosenCharacters)
}

  for (var i = 0; i < passwordLength; i++) {
    
//  if (promptLower !== null) {
  password += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
//   }
// else {
//   password += upperCase.split(",")[Math.floor(Math.random() * 26)];
// }


    

    
  } //for loop

  return password;
} //functiom


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var upperCase = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
// var specialChar = [!, @, #, ]


// make a promp when generate button is pushed. 
// prompt user to ask how many characters they want in the password
// assign answer to vairable which is put into the loop 
// promt user if they want upper case
// prompt user if they want lower Case 
// prompt user if they want special chsractes 

// var input 