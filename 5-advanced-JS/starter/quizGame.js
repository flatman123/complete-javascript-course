//quizGame


function Question(question, correctAnswer) {
	this.question = question;
	this.correctAnswer = correctAnswer;

	function askQuestion() {
		var randomQuestion, userAnswer, firstQuestion, answer,
			secondQuestion, thirdQuestion, forthQuestion;
		
		q1 = [
			firstQuestion = new Question('Do you think programming fun? \n 0:Yes \n 1:No \n 2:Sometimes', '0'),
			secondQuestion = new Question('What programming laugage are you messing with? \n 0:Python \n 1:JavaScript \n 3:CSS', '1'),
			thirdQuestion = new Question('What langurage did you learn prior to this one? \n 0:I dunno \n 1:C++ \n 2:Python', '2'),
			forthQuestion = new Question('True or False: You know CSS and HTML? \n 0:true \n 1:false', '0')
		];
		
		function init() {
			correctAnswer = [0,1,2];
			randomQuestion = Math.floor(Math.random(0) * q1.length);
			userAnswer = prompt(q1[randomQuestion].question);

			if(userAnswer === q1[randomQuestion].correctAnswer) {
				return console.log('Correct Answer!')
			} else {
				console.log('Sorry Try again!');
				generateQuestion();
			}
		}
		return init;
	};
};



var generateQuestion = askQuestion();
generateQuestion();