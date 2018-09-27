// create variables for the game, setting all to 0
var correctAnswers = 0
var incorrectAnswers = 0

$("#button").on("click", function () {
    $("#button").hide() // after clicking the start button, the button will disappear
    $("#photo-1").hide()
    $("#questions-div").show()

})

$("#submit").on("click", function () { // when user clicks the submit button, it will stop the clock & score
    clearInterval(intervalID);
    $("#questions-div").hide()
    score()
})

$(document).ready(function () {
    Quiz()

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
        $("#timer").html("<h2>You have " + timerCount + " seconds left.</h2>")

        if (timerCount === 0) {
            $("#timer").html("<h2>Time is Up!</h2>")
            stop()
        }
    }

    function stop() {
            clearInterval(intervalID);
            $("#questions-div").hide()
            score()
    }

    function Quiz() {
        run()
        $('input').click(function () {
            if ($(this).is(':checked') && $(this).hasClass("correct")) {
                correctAnswers++;
            } else if ($(this).is(':checked') && $(this).hasClass("incorrect")) {
                incorrectAnswers++;
            } 
        })
    }

    score()
})

