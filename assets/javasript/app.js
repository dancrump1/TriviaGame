// Link to questions API: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
var APIurl;
$(".btn").click(function(){
var userDifficulty = $(this).val();
if (userDifficulty == 'Easy') {
    APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
    $.ajax({
        url: APIurl,
        Method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}
else if (userDifficulty == 'Medium'){
    APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
    $.ajax({
        url: APIurl,
        Method: "GET"
    }).then(function (response) {
        console.log(response);
    })  
}

else if (userDifficulty == 'Hard'){
    APIurl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=" + userDifficulty + "&type=multiple";
    $.ajax({
        url: APIurl,
        Method: "GET"
    }).then(function (response) {
        console.log(response);
    }) 
}
})