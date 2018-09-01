$(document).ready(function () {

    // GLOBAL VARIABLES
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

    var indexNum = 0;

    var timeBetweenQuestions = 5;

    var questionDisplay =

        "<p>" + trivia[indexNum].question + "</p>" +
        "<h3>" + trivia[indexNum].options[0] + "</h3>" +
        "<h3>" + trivia[indexNum].options[1] + "</h3>" +
        "<h3>" + trivia[indexNum].options[2] + "</h3>" +
        "<h3>" + trivia[indexNum].options[3] + "</h3>";

    var correctAnswerDisplay =
        "<p>Correct!</p>";

    var wrongAnswerDisplay =
        "<p>Wrong!</p>" +
        "<p>The correct answer was: " + trivia[indexNum].correctAnswer + "</p>";

    var timesUpDisplay =
        "<p>Time's Up!</p>" +
        "<p>The correct answer was: " + trivia[indexNum].correctAnswer + "</p>";

    // =====================================================================================


    // PRESS START TO START THE GAME

    $("#start-button").on("click", nextQuestion);

    // =====================================================================================

    // DISPLAYS QUESTION SCREEN
    function nextQuestion() {

        // LOCAL VARIABLES
        var timeRemaining = 30;
        var timerA = setInterval(function () {
            timeRemaining--;

            gameDivDisplay()

            // stops the countdown when timer reaches 0
            if (timeRemaining === 0) {
                clearInterval(timerA)
            };
        }, 1000);
        // ====================================

        // create new DOM elements to display timer, question, and options
        function gameDivDisplay() {

            // timer
            var pTime = $("<p>").text("Time Remaining: " + timeRemaining + " seconds")
            $("#game-div").html(pTime)
            // question
            var pQuestion = $("<p id='question'>").text(trivia[indexNum].question)
            $("#game-div").append(pQuestion)
            // options
            var option1 = $("<h3 class='options'>").text(trivia[indexNum].options[0])
            $("#game-div").append(option1)
            var option2 = $("<h3 class='options'>").text(trivia[indexNum].options[1])
            $("#game-div").append(option2)
            var option3 = $("<h3 class='options'>").text(trivia[indexNum].options[2])
            $("#game-div").append(option3)
            var option4 = $("<h3 class='options'>").text(trivia[indexNum].options[3])
            $("#game-div").append(option4)
        };
        gameDivDisplay()

    };
    // =====================================================================================

    // DISPLAYS CORRECT ANSWER SCREEN
    function correctAnswerScreen() {

    };
    // =====================================================================================

    // DISPLAYS WRONG ANSWER SCREEN
    function wrongAnswerScreen() {

    };
    // =====================================================================================

    // DISPLAYS TIME UP SCREEN
    function timesUpScreen() {

    };
    // =====================================================================================


});