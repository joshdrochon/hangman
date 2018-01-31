//business logic

//constructors
function User(name, score, guess){
  this.name = name;
  this.score = score;
  this.guess = guess;
}





//functions





let guessChecker = function(){

  var userGuess = prompt("Enter a letter");

  let randomWord = "graveyard"; //hard-coded test case


  for(i=0;i<randomWord.length; i++){
    //console.log(randomWord[i]);
    if(randomword[i] === userGuess){
      console.log("You guessed correctly!");
    }else{
      console.log("You guessed wrong!")
    }
  }
}// guessChecker





var words = ["Superman", "Spiderman", "Nathan Drake",
             "Steve Jobs", "Batman", "Iron Man", "Antman",
             "Hellboy", "Luke Skywalker", "Ben Kenobi",
             "Darth Vader", "Spartan 117"];

var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(i = 0; i<words.length; i++){

  var randomIndex = Math.floor(Math.random() * words.length);
  console.log(words[randomIndex]);
}

let counter = 5;


if(user guess correct letter){
  display in field
}else{
  counter --;
}





//ui logic

var userName = $("#input-name").val();

if(userName === "" || userName === null){
  prompt("Do I look like a mind reader? Please enter your name you.");
}

if(userName){ //the very existence of the 'defined' variable evaluates to true
  alert("Thanks, " + userName);
}

let newUser = (userName, score);






/*

1)
2) user needs to be able to guess a letter
3) if the letter the user guess is correct the letter should be displayed in the progress field
4) if the user's guess does not match any of the letters in the randomly generated word, then one point will be subtracted from the score and
  and that letter should be displayed in the wrong guesses display field
5) The score will begin at 5. When the score reaches 0, and not all letters have been matched, the player loses
6) If the score is > 0 by and all letters of the word have been filled in, then the user will window
7) the user will need the ablity to quit and any moment they want

*/
