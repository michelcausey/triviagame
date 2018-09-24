var answers = [];

// an object array to hold my questions & answer choices, and correct answers.
var quizContent = [{
        question: "'The Reaping' portrays which biblical events?",
        answers: {
            a: "The Destruction of Sodom & Gomorrah",
            b: "The Great Flood",
            c: "The Plagues of Egypt",
            d: "David vs. Goliath"
        },

        correctAnswer: "c"

    },
    {
        question: "Select the correct character name / actress combo for the mom in 'The Ring', 'The Ring 2', and 'Rings.'",
        answers: {
            a: "Margaret White / Piper Laurie",
            b: "Rachel Keller / Naomi Watts",
            c: "Lynn Sear / Toni Collette",
            d: "Annie Wilkes / Kathy Bates",
        },

        correctAnswer: "b"
    },
    {
        question: "As of September 2018, how many movies make up the Paranormal Activity series?",
        answers: {
            a: "4",
            b: "5",
            c: "6",
            d: "7",
        },

        correctAnswer: "c"
    },
    {
        question: "Which of the following characters are NOT a member of 'The Losers Club' in Stephen King's IT?",
        answers: {
            a: "Richard Tozier",
            b: "Bill Denbrough",
            c: "Beverly Marsh",
            d: "Henry Bowers",
        },

        correctAnswer: "d"
    },
    {
        question: "In 'The Strangers', who does the girl in the blonde mask ask for at the door, during her initial contact with Kristen & James?",
        answers: {
            a: "Tamara",
            b: "Tanya",
            c: "Terrie",
            d: "Tabatha",
        },

        correctAnswer: "a"
    },
    {
        question: "Darkness Falls tells the revenge story of which magical creature?",
        answers: {
            a: "Jack Frost",
            b: "Slenderman",
            c: "The Toothfairy",
            d: "Belsnickel",
        },

        correctAnswer: "c"
    },
    {
        question: "In what US City can you see the stairs that Damien fell down in The Exorcist?",
        answers: {
            a: "Mount Hood, Oregon",
            b: "Burkittsville, Maryland",
            c: "Vacherie, Louisiana",
            d: "Georgetown, Washington DC",
        },

        correctAnswer: "d"
    },
    {
        question: "What fictional Maine town is the setting for Stephen King's IT?",
        answers: {
            a: "Castle Rock",
            b: "Jerusalem's Lot",
            c: "Derry",
            d: "Ogunquit",
        },

        correctAnswer: "c"
    },
    {
        question: "What is the correct chronological of the movies in 'The Conjuring' universe?",
        answers: {
            a: "Annabelle, The Conjuring, The Nun, The Conjuring 2",
            b: "The Nun, Annabelle, The Conjuring, The Conjuring 2",
            c: "The Conjuring, The Conjuring 2, Annabelle, The Nun",
            d: "The Conjuring, The Nun, The Conjuring 2, Annabelle",
        },

        correctAnswer: "b"
    },
    {
        question: "In the movie Oculus, Kaylie begins eating an apple only to realize it's actually a(n):",
        answers: {
            a: "Eyeball",
            b: "Lightbulb",
            c: "Onion",
            d: "Heart",
        },

        correctAnswer: "b"
    },
    {
        question: "Who spent their summer at Camp Crystal Lake?",
        answers: {
            a: "Freddy",
            b: "Michael",
            c: "Jason", //JSON
            d: "Johnny",
        },

        correctAnswer: "c"
    },
    {
        question: "The five main characters in Cabin in the Woods are associated with a specific trope. Which one is missing from the list: The Virgin, The Whore, The Fool, The Scholar, and: ",
        answers: {
            a: "The Athlete",
            b: "The Healer",
            c: "The Protector",
            d: "The Savior",
        },

        correctAnswer: "a"
    }
]

console.log(quizContent)

function startGame() {
    confirm("ready?")
    if (confirm = true) {
        run()
    }
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
    if (timerCount === 15) {
        $("#timer").html("<h2>Half-way! " + timerCount + "seconds remaining</h2>")
    } else if (timerCount === 0) {
        $("#timer").html("<h2>Time is Up!</h2>")
        stop()
    }
}

// when the clock reaches 0 it will perform this function, to reset the intervalID to 0 in case we start again
function stop() {
    clearInterval(intervalID);
}

function Quiz() {

for (var i = 0; i < quizContent.length; i++){
    console.log(quizContent)
    $("#question-div").text(JSON.stringify(quizContent[0].question[0]))
    $("#answer-div").text(JSON.stringify(quizContent[0].answers[0]))
    i++
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
Quiz()