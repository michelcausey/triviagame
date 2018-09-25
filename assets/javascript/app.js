// create variables for the game, setting all to 0
var correctAnswers = 0
var incorrectAnswers = 0
var notAnswered = 0
var counter = 0



function startGame() {

    // only the title, instructions, and start button should show
    $("#questions-div").hide()

    // after clicking the start button, the button will disappear
    // after clicking the start button, begin the timer
    // after clicking the start button, begin the quiz
    $("#button").on("click", function () {
        $("#button").hide()
        run()
        Quiz()
    })
}

// set the clock to 90 seconds
var timerCount = 90;
var intervalID;

// ensures the timer starts over each time it runs down from 30 seconds
function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000)
}

// function that counts down by 1 second intervals
function decrement() {
    timerCount--;
    $("#timer").html("<h2>Time Remaining: " + timerCount + "</h2>")

    // display a warning at 15 seconds and stops the time when it reaches 0
    if (timerCount === 0) {
        $("#timer").html("<h2>Time is Up!</h2>")
        stop()
    }
}

// when the clock reaches 0 it will perform this function, to take away the question and display the results
function stop() {
    $("#submit").on("click", function () {
        clearInterval(intervalID);
        $("#questions-div").hide()
        $("#results").show()
    })

}

function Quiz() {
    $("#questions-div").show()
    $("input").each(function () {
        if ($("input:checked") === true && $("input:checked").hasClass("correct")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    })
}

$("#correct-answers").html("<h2># of correct answers: " + correctAnswers + "</h2>") 
$("#incorrect-answers").html("<h2># of incorrect answers: " + incorrectAnswers / 4 + "</h2>")

console.log(correctAnswers)
console.log(incorrectAnswers)

startGame()
stop()