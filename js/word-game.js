$("#result-box, #next, #finish-screen, #hint").hide();

let correct = 0;
let wrong = 0;
let totalWrong = 0;

let totalScore = 100;
let score;
let score1 = 100;
let score2 = 100;
let score3 = 100;
let score4 = 100;
let score5 = 100;

let randomNums = [0, 1, 2, 3, 4];
let randomIndex;
getRandNum = () => {
	randomIndex = randomNums[Math.floor(Math.random() * randomNums.length)];
	let idx = randomNums.indexOf(randomIndex);
	randomNums.splice(idx, 1);
	return randomIndex;
};
getRandNum();
let i = randomIndex;

let scrambledWords = {
	REYJUQ: "jquery",
	PTNYOH: "python",
	MTLH: "html",
	ROTBO: "robot",
	MUOES: "mouse",
};
let unscramWords = ["jquery", "python", "html", "robot", "mouse"];

let h = 0;
let x = 1;

/**NEXT BUTTON */
$(".next-btn").on("click", () => {
	$("#input").val("");
	getRandNum();
	i = randomIndex;
	h = 0;
	console.log(`i = ${i}`);
	//updates current scrambled word
	$("#scram-word").html(Object.keys(scrambledWords)[i]);
	if (i === undefined) {
		let average = getAverage(score1,score2,score3,score4,score5)
		$("#main-screen").hide();
		$("#finish-screen").show();
		//FINISH SCREEN ELEMENTS
		$("#score1").text(score1);
		$("#score2").text(score2);
		$("#score3").text(score3);
		$("#score4").text(score4);
		$("#score5").text(score5);

		if (105 >= average && average >= 100) {
			$("#rating")
				.text("Legendary")
				.css("color", "rgb(123, 0, 255)")
				.css("font-size", "40px");
		} else if (99 >= average && average >= 80) {
			$("#rating")
				.text("Good")
				.css("color", "rgb(0, 255, 106)")
				.css("font-size", "40px");
		} else if (79 >= average && average >= 60) {
			$("#rating")
				.text("Satisfactory")
				.css("color", "rgb(255, 162, 0)")
				.css("font-size", "40px");
		} else if (59 >= average && average >= 40) {
			$("#rating")
				.text("Poor")
				.css("color", "rgb(255, 0, 0)")
				.css("font-size", "40px");
		} else if (39 >= average && average >= 20) {
			$("#rating")
				.text("Terrible")
				.css("color", "rgb(107, 79, 79)")
				.css("font-size", "40px");
		} else if (19 >= average) {
			$("#rating")
				.text("Absolute garbage")
				.css("color", "rgb(94, 94, 94)")
				.css("font-size", "40px");
		}

		$("#overall").text(`Overall: ${average}`);
	}
	x++;
	$("#question-num").text(x + "/5");
	$("#next").hide();
	$("#result-box").hide();
	$("#hint").hide();
	wrong = 0;
	$("#debug-div").html("Wrong: " + wrong);
	//console.log(i)
});

$("#scram-word").html(Object.keys(scrambledWords)[i]);
//next button

//$('#result-box').hide()

let a = 0;

// WHEN SUBMITTED
$("#joke-form").on("submit", (event) => {
	event.preventDefault();
	//console.log(getRandNum())

	if ($("#input").val() === "") {
		alert("Please enter an answer to continue");
		return;
	}

	//CHECKS IF PREVIOUS ANSWER === THE NEW ANSWER
	let b = false;

	repeatChecker = () => {
		if (a > 0) newVal = $("#input").val();

		if (a > 0 && preVal === newVal) {
			alert("Please enter a different answer");
			b = true;
			return;
		}

		preVal = $("#input").val();
		console.log(a);
		a++;
	};
	repeatChecker();
	if (b) return;

	/**console.log(`prev a ${a}`)
	console.log(a)
	console.log(`prevVal ${prevVal}`)
	console.log(`newVal ${newVal}`)*/

	$("#result-box").show();

	//  check if answer is correct
	var answer = $("#input").val().toLowerCase();

	//   Show appropriate message + VALIDATION
	if ($("#input").val().length !== unscramWords[i].length) {
		$("#result").text(
			`The answer should be ${unscramWords[i].length} letters buddy`
		);
		return;
	}
	
	if (wrong > 0) {
		if (answer !== unscramWords[i]) {
			$("#hint").show();
			
		}
		if (h < 3) {
			$("#hint-btn").show();
			$('#hint-text').text('')
		}
		
	}
	if (answer === unscramWords[i]) {
		$("#hint").hide();
		$("#result").text("Great job! Your got it right!");
		$("#next").show();
		if (x === 5) {
			$(".next-btn").text("Results");
		}
		if (answer === unscramWords[i] && wrong === 0) {
			$("#result").text("Wow, you got it right on your first try!");
			if (i === 0) {
				score1 += 5;
			} else if (i === 1) {
				score2 += 5;
			} else if (i === 2) {
				score3 += 5;
			} else if (i === 3) {
				score4 += 5;
			} else if (i === 4) {
				score5 += 5;
			}
		}
	} else {
		$("#result").text("Sorry that is incorrect :(");
		totalWrong++;
		wrong++;
		score -= 10;
	}
	if (wrong === 2 && answer !== unscramWords[i]) {
		$("#result").text("Try again :)");
	} else if (wrong === 3 && answer !== unscramWords[i]) {
		$("#result").text("Sorry, your answer is still wrong");
	}

	console.log("unsramWords[i].length: " + unscramWords[i].length);
	console.log("#input.val().length: " + $("#input").val().length);

	if (answer !== unscramWords[i] && i === 0) score1 -= 10;
	else if (answer !== unscramWords[i] && i === 1) score2 -= 10;
	else if (answer !== unscramWords[i] && i === 2) score3 -= 10;
	else if (answer !== unscramWords[i] && i === 3) score4 -= 10;
	else if (answer !== unscramWords[i] && i === 4) score5 -= 10;

	//$("#wrong-box").html("Total wrong: " + totalWrong);
	//$("#debug-div").html("Wrong: " + wrong);

	$("#question-num").text(x + "/5");

	//console.log(scrambledWordsArray[0])
	
	console.log(`totalWrong ${totalWrong}`);
	console.log(`hints ${h}`);
	console.log(`score = ${score}`);
	console.log(score1);
	console.log(score2);
	console.log(score3);
	console.log(score4);
	console.log(score5);
});

/**HINT BUTTON */
$("#hint-btn").on("click", () => {
	h++;

	$("#hint-btn").hide();
	$("#hints-remaining").text(`Hints remaining: ${3 - h}/3`);
	if (3 - h === 0) {
		$("#hints-remaining").text(`Sorry, you ran out of hints :(`);
	}
	//REYJUQ
	if (i === 0 && h === 1) {
		$("#hint-text").text('The word starts with a "J"');
		score1 -= 5;
	} else if (i === 0 && h === 2) {
		$("#hint-text").text("The word is a JS library used in this project");
		score1 -= 5;
	} else if (i === 0 && h === 3) {
		$("#hint-text").text("Look at the source code!");
		score1 -= 5;
	}
	//PTNYOH
	else if (i === 1 && h === 1) {
		$("#hint-text").text('The word starts with a "P"');
		score2 -= 5;
	} else if (i === 1 && h === 2) {
		$("#hint-text").text(
			"The word is a general purpose programming language "
		);
		score2 -= 5;
	} else if (i === 1 && h === 3) {
		$("#hint-text").text("The word is named after a snake!");
		score2 -= 5;
	}
	//MTLH
	else if (i === 2 && h === 1) {
		$("#hint-text").text('The word starts with a "H"');
		score3 -= 5;
	} else if (i === 2 && h === 2) {
		$("#hint-text").text(
			"The word is a programming language used for making website"
		);
		score3 -= 5;
	} else if (i === 2 && h === 3) {
		$("#hint-text").text("The word is actually an acronym");
		score3 -= 5;
	}
	//ROTBO
	else if (i === 3 && h === 1) {
		$("#hint-text").text('The word starts with a "R"');
		score4 -= 5;
	} else if (i === 3 && h === 2) {
		$("#hint-text").text("The word is used for making human life easier");
		score4 -= 5;
	} else if (i === 3 && h === 3) {
		$("#hint-text").text("The word is a machine programmable by humans");
		score4 -= 5;
	}
	//MUOES
	else if (i === 4 && h === 1) {
		$("#hint-text").text('The word starts with a "M"');
		score5 -= 5;
	} else if (i === 4 && h === 2) {
		$("#hint-text").text(
			"The word is used for navigating through apps and websites"
		);
		score5 -= 5;
	} else if (i === 4 && h === 3) {
		$("#hint-text").text(`Your probably using it right now!`);
		score5 -= 5;
	}
});
getAverage = (s1, s2, s3, s4, s5) => {
	return (s1 + s2 + s3 + s4 + s5) / getAverage.length;
};

$("#question-num").text(x + "/5");
//$("#debug-div").html("Wrong: " + wrong);
