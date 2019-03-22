var teamAscores, teamAaverage, teamBscores, teamBaverage;

teamAscores = [123, 120, 103];
teamAaverage = (teamAscores[0] + teamAscores[1] + teamAscores[2]) / 3;
console.log(teamAaverage);

teamBscores = [123, 94, 123];
teamBaverage = (teamBscores[0] + teamBscores[1] + teamBscores[2]) / 3;
console.log(teamBaverage);

var teamCscores, teamCaverage;

teamCscores = [123, 134, 105];
teamCaverage = (teamCscores[0] + teamCscores[1] + teamCscores[2]) / 3;
console.log(teamCaverage);

switch(true){
	case ((teamBaverage === teamAaverage) &&
			 (teamBaverage === teamCaverage)):
		console.log("The scores are the same!!");
	break

	case ((teamBaverage > teamAaverage) &&
			 (teamBaverage > teamCaverage)):
		console.log("TEAM B WINS!!");
	break

	case ((teamAaverage > teamBaverage) &&
			(teamAaverage > teamCaverage)):
		console.log("TEAM A WINS!!");
	break

	case (teamCaverage > teamAaverage) &&
			 (teamCaverage > teamBaverage):
		console.log("TEAM C WINS!!");
	break
	default:
		alert("Some weird error happened");
}


if (4 > 5) {
} else{
	console.log("nope , incorrect");
}
