
function welcome(){
    console.log("Welcome to the password validator tool!");
}

welcome();

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a password: ", function(input){

    password = input.split("");

    if(password.length >= 10){
        console.log("Success! You have a great password length!");
    } else {
        console.log("Error: Password must be at leat 10 characters long");
    }

    reader.close();

});