var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function gameEnded() {
  document.getElementById('newGameButton').style.display = "inline";
  document.getElementById('easyBtn').style.display= 'none';
  document.getElementById('hardBtn').style.display = 'none';
  document.getElementById('inputBox').setAttribute('readonly','readonly');
}

function easyMode(){
  maxGuesses = 10;
  document.getElementById('easyBtn').className = 'activeButton';
  document.getElementById('hardBtn').className = '';
}
function hardMode() {
 maxGuesses = 5;
 document.getElementById('hardBtn').className = 'activeButton';
 document.getElementById('easyBtn').className = '';
}

function  newGame() {
 window.location.reload();
}

 function init() {
  computerGuess = Math.floor(Math.random() * 100 +1);
  document.getElementById('newGameButton').style.display = "none";
}

function compareGuess() {
   var userGuess = " "+ document.getElementById('inputBox').value;

  userGuessLog.push(userGuess);
   document.getElementById('guessLog').innerHTML = userGuessLog;

  attempts++;
 document.getElementById('attempts').innerHTML = attempts;

  if(userGuessLog.length < maxGuesses) {
  if(userGuess > computerGuess){
     
     if(Math.abs(userGuess-computerGuess)<=10){
        document.getElementById('textOutput').innerHTML = " Your guess is too high and Your Near to the answer Find it";
     }
     else{
        document.getElementById('textOutput').innerHTML = " Your guess is too high";
     }
     document.getElementById('inputBox').value = "";
   }else if(userGuess < computerGuess){
     
     if(Math.abs(userGuess-computerGuess)<=10){
        document.getElementById('textOutput').innerHTML = " Your guess is too low and Your Near to the answer Find it";
     }
     else{
        document.getElementById('textOutput').innerHTML = " Your guess is too low";
     }
     document.getElementById('inputBox').value = "";
   }else {
     document.getElementById('textOutput').innerHTML = "Correct! you got it in "+attempts+ 'attempts';
     document.getElementById('container').style.backgroundColor = 'green';
     gameEnded();
     }
}
  else {
   if(userGuess > computerGuess){
     document.getElementById('textOutput').innerHTML = " Your lose!"  +'<br> the number was ' + computerGuess;
     document.getElementById('container').style.backgroundColor = '#e82c4e';
     gameEnded();
   }else if(userGuess < computerGuess){
     document.getElementById('textOutput').innerHTML = " Your lose!"  +'<br> the number was ' + computerGuess;
     document.getElementById('container').style.backgroundColor = '#e82c4e';
     gameEnded();
   }else{
     document.getElementById('textOutput').innerHTML = "Correct! you got it in "+attempts+ 'attempts';
     document.getElementById('container').style.backgroundColor = 'green';
     gameEnded();
   }
 }
}