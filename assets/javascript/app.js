$(document).ready(function () {

    // Create an array of objects that hold the questions and answers
    var trivia = [
        {
            question: "Which star is at the center of our Solar System?",
            options: ["Proxima Centauri", "The Sun", "Alpha Centauri", "Barnard's Star"],
            correctAnswer: "The Sun"
        },

        {
            question: "How long does it take light from the sun to reach earth?",
            options: ["8 minutes and 20 seconds", "24 hours", "365 days", "35 minutes and 30 seconds"],
            correctAnswer: "8 minutes and 20 seconds"
        },

        {
            question: "Which is the largest planet in our solar system?",
            options: ["Uranus", "Saturn", "The Moon", "Jupiter",],
            correctAnswer: "Jupiter"
        },

        {
            question: "Which planet has the most volcanoes?",
            options: ["Mars", "Jupiter", "Venus", "Earth"],
            correctAnswer: "Venus"
        },

        {
            question: "Which planet is the second smallest in the solar system?",
            options: ["Earth", "Mercury", "Pluto", "Mars"],
            correctAnswer: "Mars",
        }
    ];

    var whateverIndexImOn = 0;

    var timeRemaining = 5;

    var timeBetweenQuestions = 5;

    var timeDisplay = "<p>Time Remaining: " + timeRemaining + " seconds" + "</p>";

    var questionDisplay =

        "<p>" + trivia[whateverIndexImOn].question + "</p>" +
        "<h2>" + trivia[whateverIndexImOn].options[0] + "</h2>" +
        "<h2>" + trivia[whateverIndexImOn].options[1] + "</h2>" +
        "<h2>" + trivia[whateverIndexImOn].options[2] + "</h2>" +
        "<h2>" + trivia[whateverIndexImOn].options[3] + "</h2>";


    var correctAnswerDisplay =
        "<p>Correct!</p>";

    var wrongAnswerDisplay =
        "<p>Wrong!</p>" +
        "<p>The correct answer was: " + trivia[whateverIndexImOn].correctAnswer + "</p>";

    var timesUpDisplay =
        "<p>Time's Up!</p>" +
        "<p>The correct answer was: " + trivia[whateverIndexImOn].correctAnswer + "</p>";

    

    

    $("#start-button").on("click", function () {

        var timer = setInterval(countdown, 1000);

        function countdown() {
            $("#countdown-space").html("<p>Time Remaining: " + timeRemaining-- + " seconds" + "</p>");
    
            if (timeRemaining === 0) {
                clearInterval(timer)
                $("#game-area").html(timesUpDisplay);
            }
            // console.log(timeRemaining)
        
        }

        $("#countdown-space").html(timeDisplay);

        $("#game-area").html(questionDisplay);

        

        $("h2").on("click", function (event) {
            if (event.target.innerHTML === trivia[whateverIndexImOn].correctAnswer) {
                $("#game-area").html(correctAnswerDisplay);
                console.log("yes")
            }
            else {
                $("#game-area").html(wrongAnswerDisplay);
            }
        });

    });

});