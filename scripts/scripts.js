//business logic

//constructors
function User(name, score, guess){
  this.name = name;
  this.score = score;
  this.guess = guess;
}

//functions

var words = ["Superman", "Spiderman", "Nathan Drake",
             "Steve Jobs", "Batman", "Iron Man", "Antman",
             "Hellboy", "Luke Skywalker", "Ben Kenobi",
             "Darth Vader", "Spartan 117"];

var randomNum = Math.floor(Math.random() * words.length);

var randomWord = words[randomNum];

//console.log(randomWord);

let userGuess = prompt("Enter a letter!");

if(userGuess === randomWord[0] || randomWord[0].toLowerCase()){
  userGuess = userGuess.toUpperCase();
  console.log(userGuess);
}

let guessChecker = function(){

  for(i=0;i<randomWord.length; i++){
    //console.log(randomWord[i]);
  if(randomWord[i] === userGuess){
    console.log(userGuess);
  	}continue;
	}
}

if(userGuess === randomWord[0]){
  randomWord = randomWord.toUpperCase();
}

// for(i = 0; i<words.length; i++){
//
//   var randomIndex = Math.floor(Math.random() * words.length);
//   console.log(words[randomIndex]);
// }
//
// let counter = 5;
//
//
// if(user guess correct letter){
//   display in field
// }else{
//   counter --;
// }

guessChecker();




//ui logic

var userName = $("#input-name").val();

if(userName === "" || userName === null){
  prompt("Do I look like a mind reader? Please enter your name you.");
}

if(userName){ //the very existence of the 'defined' variable evaluates to true
  alert("Thanks, " + userName);
}

let newUser = (userName, score);

let userGuess = $("#user-guess").val();






/*

Working version:

1) + random word is generated by the computer, by passing randomNumber into words[]

2) + user can guess a letter, which is stored into a variable

3) + guessChecker() will loop through all letters of randomWord to verify a match or not

3) + if guessChecker() finds a match that letter will be logged by the console

4) - if the user's guess does not match any of the letters in the randomly generated word,
  then one point will be subtracted from the score and
  and that letter should be displayed in the wrong guesses display field
5) - The score will begin at 5. When the score reaches 0, and not all letters have been matched, the player loses
6) - If the score is > 0 by and all letters of the word have been filled in, then the user will window
7) - the user will need the ablity to quit and any moment they want

*/

/* var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
             "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; */
