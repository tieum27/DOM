var rand;
var tries = 3;
var counter = 0;
//Generate a number from 0 to 10
rand = Math.floor(Math.random()*11);
console.log(rand);

function decrease() {
  tries--;
  document.getElementById("tries").innerHTML = tries
}


function hiLow () {
  let userGuess = parseInt(document.getElementById("numInput").value);
  if(tries > counter) {
     if(rand == userGuess) {
      document.getElementById("result").innerHTML = "You won!! Congrats!"
    } else if (rand < userGuess) {
      document.getElementById("result").innerHTML = "You guessed too high!"
    } else if (rand > userGuess) {
      document.getElementById("result").innerHTML = "Your guess was too low..."
    }
  }
  if (tries == 1) {
    document.getElementById("result").innerHTML = "You lose!"
    document.getElementById("Button").disabled = true;
  }
}
