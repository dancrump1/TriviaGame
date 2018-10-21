// Link to questions API: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
var APIurl;

//Will hold value from difficulty buttons
var userDifficulty;

//timer variables
var intervalSetup;
var timerStartNumber = 120;

var correctAnswersAmount = 0;
var incorrectAnswersAmount = 0;
hideResultsArea();
//either time runs out || submit button is clicked
function waystoEndGame() {

        alert("You've run out of time!");
        showResults();
        resultsContainer.style.display='block';
        clearInterval(intervalSetup);
        hideDifficulty();
        hideQAArea();
    
};


//On click of submit, hide Q&A area
function hideQAArea() {
    var QAContainer = document.getElementById('qaContainer');
    QAContainer.style.display = 'none';

};

//After easy/med/hard is clicked, element that holds them disappears
//
//I left this out because personally I find it lest nauseating to look at
//
function hideDifficulty() {
    var difficultyContainer = document.getElementById('titleContainer');
    if (difficultyContainer.style.display === "none") {
        difficultyContainer.style.display = 'block';
    }
    else {
        difficultyContainer.style.display = 'none';
    }
};

function hideResultsArea() {
    var resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'none';

};

//Next two functions make timer work
function timerSetup() {
    intervalSetup = setInterval(decrement, 1000);
    //Alerts that time is almost up
};

function decrement() {
    timerStartNumber--;
    $("#timer-text").html("<h2>Timer: " + timerStartNumber + "</h2>");
};
var incorrectAnswerValue = $(".incorrectAnswerButton").val();
var correctAnswerValue = $(".correctAnswerButton").val();

//CHECK IF ANSWER WAS CORRECTANSWER
function correctAnswerCheck() {
    if (incorrectAnswerValue === 'Wrong') {
        incorrectAnswersAmount++;
    }
    else if (correctAnswerValue === 'Right') {
        correctAnswersAmount++;
    }
    else {
        incorrectAnswerValue++;
    }
};

//ENDGAME FUNCTION
function showResults() {
    $("#numbercorrect-text").append("<h3>" + correctAnswerValue + "</h3><br>");

    $("#numberwrong-text").append("<h4>" + incorrectAnswerValue + "</h4>");
    $("")
}

//Start of GAme function
function startofGame() {
    timerStartNumber=120;
    APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
    $.ajax({
        url: APIurl,
        Method: "GET"
    }).then(function (response) {
        console.log(response);

        var qaText = $("#questionList-Text").html(response.results)
        var questionFromAPI = [];
        var correctAnswer;
        var incorrectAnswers = [];

        for (i = 0; i < 10; i++) {
            questionFromAPI = response.results[i].question;
            correctAnswer = response.results[i].correct_answer;
            console.log(questionFromAPI);
            console.log(correctAnswer);

            // Dispay questions here
            $("#questionList-Text").append("<br><p>" + questionFromAPI + "</p>");


            // Display incorrect answers here
            for (j = 0; j < 3; j++) {
                incorrectAnswers = [response.results[i].incorrect_answers[j]];
                console.log(incorrectAnswers);
                $("#questionList-Text").append("<input type='radio' name =" + i + " class=incorrectAnswerButton value = Wrong>" + incorrectAnswers + "</input></br>");
            }


            // Display correct answer here
            $("#questionList-Text").append("<input type='radio' name=" + i + " class=correctAnswerButton value = Right>" + correctAnswer + "</input><br>");
        }


    });

};

//Placing this in bracket above causes bug where incriment increases with each
//button press.  This calls function too early, but prevents the bug.
timerSetup();




// on click of easy/med/hard buttons
$(".difficulty").on("click", function () {



    userDifficulty = $(this).val();
    if (userDifficulty == 'easy') {
        startofGame();
    }
    else if (userDifficulty == 'medium') {
        startofGame();
    }
    else if (userDifficulty == 'hard') {
        startofGame();
    }




});
var submitButton = $("<input type='submit' class='submit' value ='submit'></input>");
$("#submit-button").append(submitButton);


// will run waystoEndGame after 120 seconds no matter what.  Needs to be 
//based off the countdown timer.
setTimeout(waystoEndGame,12000)

var submitButtonValue;
//on click of submit, run ways to end game
$(".submit").on("click", function () {
    submitButtonValue = $(this).val();
    if(submitButtonValue==='submit'){
        showResults();
        hideQAArea();
        hideDifficulty();
        resultsContainer.style.display='block';
    }
});


// Tried to get a reset button to display on the results screen to click
//to reset the program.  Doesn't exactly work.
var resetButton;
$("#resetButton").on("click", function(){
resetButton = $(this).val();
if(resetButton === 'reset'){
    return 0;
}
});