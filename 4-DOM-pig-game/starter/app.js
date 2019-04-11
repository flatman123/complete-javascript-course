/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gameActive;



init();


// we need to set the scores to a default of  '0'..but we don't want to keep
	// using querySelector all the time..too much to type
//so we use the getElementById method


// Hide the Dice
document.querySelector(".dice").style.display = "none";



// Setup an EventHandler for the "rollDice button"
// Use an anonymous function for when we clock on the button

document.querySelector(".btn-roll").addEventListener("click", function(){
		
		if (gameActive){
			// here is what we need to happen when the Roll dice button is pressed
		
			// 1. Generate a random number
			var dieSum, dice, dice1, doubleSixCounter,
				randRollTwo = Math.floor(Math.random() * 6 + 1),
				randRollOne = Math.floor(Math.random() * 6 + 1);

			dice = randRollOne;
			dice1 = randRollTwo;
			dieSum = dice + dice1;
			doubleSixCounter = 0;


			// 2. Change the number for the current player
			var diceDOM = document.querySelector(".dice");
			diceDOM.src = "dice-" + dice + ".png";
			diceDOM.style.display = "block";

			var dice1DOM = document.querySelector(".dice1");
			dice1DOM.src = "dice-" + dice1 + ".png";
			dice1DOM.style.display = "block";

			document.querySelector("#current-" + activePlayer).textContent = dieSum;
			document.querySelector("#current-" + activePlayer).innerHTML = "<b><em>" + dieSum + "</em></b>";
			

			// 3. update the roundScore only if the number is not a 1.
			// use the == because === does not do TypeConversion
			if (dice !== 1){
				dieSum >= 5  ? doubleSixCounter++ : dieSum;
				doubleSixCounter > 1 ? nextPlayer() : doubleSixCounter;
				//add to the score
				roundScore += dieSum;
				document.querySelector("#current-" + activePlayer).textContent = roundScore;
				
			}else{
				//The next player Goes
				nextPlayer();
			};
		};	

});


		

// Create an EventListener for the Hold Button
document.querySelector(".btn-hold").addEventListener("click", function(){

		if (gameActive){
			// Add the current score to the players global Score
			scores[activePlayer] += roundScore;
			document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
			
			// This is the text box for users to enter the final score to win.
			//Check if there is a value within the text box
			// all the values of undefined (i.e "0", "", "null" are coerced to false)
			//so basically Javascrip will tried to check if input is true or false.

			input = document.querySelector(".settheGame").value;

			if (input){
				var winningScore = input;
			}else{
				alert("You did not enter a set game so it will default to '100' !");
				winningScore = 100;

			};




			//Check if the player Won the game
			if (scores[activePlayer] >= winningScore){
				
				document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
				document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
				document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
				document.querySelector(".dice").style.display = "none";
				document.querySelector(".dice1").style.display = "none";
				gameActive = false;
				
			}else{
				nextPlayer();

			};
		};
		
});





// FUNCTION FOR NEXTPLAYER
function nextPlayer(){
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
			
			//reset Values to Scores to Zero
		document.getElementById("current-0").textContent = "0";
		document.getElementById("current-1").textContent = "0";

		
		// Show the active player
				//removes "active" class from player-0
		/*document.querySelector(".player-0-panel").classList.remove("active");*/
				//and adds it to player-1
		/*document.querySelector(".player-1-panel").classList.add("active");*/

		//The problem with the above is that the active won't switch back to the other player
			//So a batter way is to "TOGGLE"
		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");
		document.querySelector(".dice").style.display = "none";
		document.querySelector(".dice1").style.display = "none";
	
}


// Create an EventListener for the NEw Game Button
document.querySelector(".btn-new").addEventListener("click", init);

function init(){
	// Resets the game's stats	 

	scores = [0,0];
 	roundScore = 0;
 	activePlayer = 0;
 	gameActive = true;
 	
 	
	document.getElementById("score-0").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.querySelector(".dice").style.display = "none";
	document.querySelector(".dice1").style.display = "none";
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContect = "Player 2";
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector(".settheGame").value = null;
	alert("Enter an amount to win before you start!");

};


function resetStats(){
	// Resets the stats for a single Player
	scorse[activePlayer]
	document.getElementById("score-" + activePlayer).textContent = "0";
	document.getElementById("current-" + activePlayer).textContent = "0";
	nextPlayer();
};







// Dom manipulation
// the "querySelector method can be used to change the HTML or CSS"

// Chanding the "current" to random numbers

/* document.querySelector("#current-" + activePlayer).textContent = dice; */

// change the italic for the dice
// innerHTML changes the value of a webpage.

/*document.querySelector("#current-" + activePlayer).innerHTML = "<b><em>" + dice + "</em></b>";*/

