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

    var correctScore = 0;
    var incorrectScore = 0;
    var unansweredScore = 0;

    // =====================================================================================

    // PRESS START TO START THE GAME

    $("#start-button").on("click", nextQuestion);

    // =====================================================================================

    // DISPLAYS QUESTION SCREEN
    function nextQuestion() {

        // LOCAL VARIABLES
        var timeRemaining = 30;
        var optionChosen = false;
        var timerA = setInterval(function () {
            timeRemaining--;

            // updates timeRemaing
            $("#timer").text("Time Remaining: " + timeRemaining + " seconds")

            // stops the countdown when timer reaches 0 or user chooses an option
            if (timeRemaining === 0) {
                clearInterval(timerA)
                timesUpDisplay()
            }
            else if (optionChosen === true) {
                clearInterval(timerA)
            }
        }, 1000);
        // ====================================

        // create new DOM element to display the timer
        function timeDivDisplay() {
            // timer
            var pTime = $("<p id='timer'>").text("Time Remaining: " + timeRemaining + " seconds")
            $("#time-div").html(pTime)
        };
        timeDivDisplay()

        // create new DOM elements to display the question and options
        function gameDivDisplay() {

            // question
            var pQuestion = $("<p id='question'>").text(trivia[indexNum].question)
            $("#game-div").html(pQuestion)
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

        // what to do when the user chooses an option
        $(".options").on("click", function () {
            optionChosen = true

            if (event.target.innerHTML === trivia[indexNum].correctAnswer) {
                correctAnswerDisplay()
            }
            else {
                wrongAnswerDisplay()
            };
        });

    };
    // =====================================================================================

    // DISPLAYS CORRECT ANSWER SCREEN
    function correctAnswerDisplay() {
        correctScore++;
        var correct = $("<p>").text("Correct!")
        $("#game-div").html(correct)
        betweenQuestions()
    };
    // =====================================================================================

    // DISPLAYS WRONG ANSWER SCREEN
    function wrongAnswerDisplay() {
        incorrectScore++;
        var wrong = $("<p>").text("Wrong!")
        $("#game-div").html(wrong)
        correctAnswerWas()
        betweenQuestions()
    };
    // =====================================================================================

    // DISPLAYS TIME UP SCREEN
    function timesUpDisplay() {
        unansweredScore++
        var timesUp = $("<p>").text("Times Up!")
        $("#game-div").html(timesUp)
        correctAnswerWas()
        betweenQuestions()

    };
    // =====================================================================================

    // DISPLAYS END GAME SCREEN
    function endGameDisplay() {
        var endGame = $("<p>").text("Game Over! Here's how you did!")
        $("#game-div").html(endGame)

        var score1 = $("<p>").text("Correct Answers: " + correctScore)
        $("#game-div").append(score1)
        var score2 = $("<p>").text("Incorrect Answers: " + incorrectScore)
        $("#game-div").append(score2)
        var score3 = $("<p>").text("Unanswered Questions: " + unansweredScore)
        $("#game-div").append(score3)
    };
    // =====================================================================================

    // OTHER FUNCTIONS
    function correctAnswerWas() {
        var answer = $("<p>").text("The correct answer was: " + trivia[indexNum].correctAnswer)
        $("#game-div").append(answer)
    };

    function betweenQuestions() {
        indexNum++;

        // goes to the next question as long as there's another questions left
        if (indexNum < 5) {
            var timerB = setTimeout(function () {
                nextQuestion()
            }, 1000 * 1);
        }
        else {
            endGameDisplay()
        }

    }
    // =====================================================================================


});