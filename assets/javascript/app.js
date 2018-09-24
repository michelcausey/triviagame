var answers = [];
var correctAnswers = ["c", "b", "c", "d", "a", "c", "d", "c", "b", "b", "c", "a"]
var questionNumber = 0

// an object array to hold my questions & answer choices, and correct answers.
var quizContent = [{
        question: "'The Reaping' portrays which biblical events?",
        answers: ["The Destruction of Sodom & Gomorrah<br>", "The Great Flood<br>", "The Plagues of Egypt<br>", "David vs. Goliath<br>"]
    },
    {
        question: "Select the correct character name / actress combo for the mom in 'The Ring', 'The Ring 2', and 'Rings.'",
        answers: ["A: Margaret White / Piper Laurie", "B: Rachel Keller / Naomi Watts", "C: Lynn Sear / Toni Collette", "D: Annie Wilkes / Kathy Bates"]
    },
    {
        question: "As of September 2018, how many movies make up the Paranormal Activity series?",
        answers: ["A: 4", "B: 5", "C: 6", "D: 7"]
    },
    {
        question: "Which of the following characters are NOT a member of 'The Losers Club' in Stephen King's IT?",
        answers: ["A: Richard Tozier", "B: Bill Denbrough", "C: Beverly Marsh", "D: Henry Bowers"]
    },
    {
        question: "In 'The Strangers', who does the girl in the blonde mask ask for at the door, during her initial contact with Kristen & James?",
        answers: ["Tamara", "Tanya", "Terrie", "Tabatha", ]
    },
    {
        question: "Darkness Falls tells the revenge story of which magical creature?",
        answers: ["Jack Frost", "Slenderman", "The Toothfairy", "Belsnickel"]
    },
    {
        question: "In what US City can you see the stairs that Damien fell down in The Exorcist?",
        answers: ["Mount Hood, Oregon", "Burkittsville, Maryland", "Vacherie, Louisiana", "Georgetown, Washington DC"]
    },
    {
        question: "What fictional Maine town is the setting for Stephen King's IT?",
        answers: ["Castle Rock", "Jerusalem's Lot", "Derry", "Ogunquit"]
    },
    {
        question: "What is the correct chronological of the movies in 'The Conjuring' universe?",
        answers: ["Annabelle, The Conjuring, The Nun, The Conjuring 2", "The Nun, Annabelle, The Conjuring, The Conjuring 2", "The Conjuring, The Conjuring 2, Annabelle, The Nun", "The Conjuring, The Nun, The Conjuring 2, Annabelle"]
    },
    {
        question: "In the movie Oculus, Kaylie begins eating an apple only to realize it's actually a(n):",
        answers: ["Eyeball", "Lightbulb", "Onion", "Heart"]
    },
    {
        question: "Who spent their summer at Camp Crystal Lake?",
        answers: ["Freddy", "Michael", "Jason", "Johnny"]
    },
    {
        question: "The five main characters in Cabin in the Woods are associated with a specific trope. Which one is missing from the list: The Virgin, The Whore, The Fool, The Scholar, and: ",
        answers: ["The Athlete", "The Healer", "The Protector", "The Savior"]
    },
]

console.log(quizContent)

function startGame() {
    $("#questions-div").hide()
    $("#answers-div").hide()
    $("#results").hide()
    $("#button").on("click", function () {
        $("#button").hide()
        run()
        Quiz()
    })
}
// set the clock to 30 seconds
var timerCount = 30;
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

// when the clock reaches 0 it will perform this function, to reset the intervalID to 0 in case we start again
function stop() {
    clearInterval(intervalID);
}

function Quiz() {

    $("#questions-div").show()
    $("#answers-div").show()

    for (var i = 0; i < quizContent[questionNumber].answers.length; i++) {
        $("#questions-div").html("<h2> Question: " + quizContent[questionNumber].question + "</h2>")
        $("#answers-div").html("<h2> Answer Choices:<br> " + quizContent[questionNumber].answers + "</h2>")
        questionNumber++
    }

    // the first question should appear with four answer choices
    // user will select their answer A, B, C, or D
    // store the answer to determine correct/incorrect answers
    // if the user does not answer the question before the timer reaches 0, the question is INCORRECT
    // if the user submits an answer before the timer runs out, the next question is posted

}

function score() {
    // an if/then statement to determine the number of correctly guessed answers
    // display the total score in the "results" div
}

startGame()