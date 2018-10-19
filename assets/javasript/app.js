// Link to questions API: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
var APIurl;











$(".difficulty").on("click", function () {
    var userDifficulty = $(this).val();
    if (userDifficulty == 'easy') {
        APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
        $.ajax({
            url: APIurl,
            Method: "GET"
        }).then(function (response) {
            console.log(response);

            var qaText = $("#questionList-Text").html(response.results)
            var questionFromAPI = [];
            var answerFromAPI;
            var correctAnswer;
            var incorrectAnswer1;
            var incorrectAnswer2;
            var incorrectAnswer3;

            for (i = 0; i < 6; i++) {
                questionFromAPI = response.results[i].question;
                console.log(questionFromAPI);
            }


        })
    }
    else if (userDifficulty == 'medium') {
        APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
        $.ajax({
            url: APIurl,
            Method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    }

    else if (userDifficulty == 'hard') {
        APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
        $.ajax({
            url: APIurl,
            Method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    }
});

