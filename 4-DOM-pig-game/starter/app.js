/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlayingLive;

// Zero's out the game before gameplay.
init();



// we need to set the scores to a default of  '0'..but we don't want to keep
	// using querySelector all the time..too much to type
//so we use the getElementById method



// Hide the Dice
document.querySelector(".dice").style.display = "none";



// Setup an EventHandler for the "rollDice button"
// Use an anonymous function for when we clock on the button
document.querySelector(".btn-roll").addEventListener("click", function(){

	if (gamePlayingLive) {

	// here is what we need to happen when the Roll dice button is pressed
	
	// 1. Generate a random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Change the number for the current player
	var diceDOM = document.querySelector(".dice");
	diceDOM.src = "dice-" + dice + ".png";
	diceDOM.style.display = "block";
	document.querySelector("#current-" + activePlayer).textContent = dice;
	document.querySelector("#current-" + activePlayer).innerHTML = "<b><em>" + dice + "</em></b>";
	

	// 3. update the roundScore only if the number is not a 1.
	// use the == because === does not do TypeConversion
	if (dice !== 1){
		//add to the score
		roundScore += dice;
		document.querySelector("#current-" + activePlayer).textContent = roundScore;
	}else{
		//The next player Goes
		nextPlayer();
	};	

	};
});

// Create an EventListener for the Hold Button
document.querySelector(".btn-hold").addEventListener("click", function(){
		if (gamePlayingLive){
			// Add the current score to the players global Score
			scores[activePlayer] += roundScore;
			document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
		
		
		//Check if the player Won the game
		if (scores[activePlayer] > 10){
			document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector(".dice").style.display = "none";
			gamePlayingLive = false;
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
	
};


// Create an EventListener for the NEw Game Button
document.querySelector(".btn-new").addEventListener("click", init);



//Here you don't need to use the pound sign becaue use ur already getting it by ID
function init(){
	// Zero's out the game before gameplay.

	scores = [0,0];
 	roundScore = 0;
 	activePlayer = 0;

 	//The game continues to play even though there is a winner. this is a problem.
	// So we need a "STATE-VARIABLE" that monitors the state of the game.
	gamePlayingLive = true;


	document.getElementById("score-0").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById("name-0").textContent = "Player-1";
	document.getElementById("name-1").textContent = "Player-2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector(".player-1-panel").classList.remove("active");
};








// Dom manipulation
// the "querySelector method can be used to change the HTML or CSS"

// Chanding the "current" to random numbers

/* document.querySelector("#current-" + activePlayer).textContent = dice; */

// change the italic for the dice
// innerHTML changes the value of a webpage.

/*document.querySelector("#current-" + activePlayer).innerHTML = "<b><em>" + dice + "</em></b>";*/

