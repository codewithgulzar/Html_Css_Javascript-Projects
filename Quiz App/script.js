const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "High-Level Textual Markup Language", correct: false },
            { text: "Hypertext Management Language", correct: false },
        ],
    },

    {
        question: "What is the purpose of CSS?",
        answers: [
            { text: "Customer Service Software", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Centralized Style System", correct: false },
            { text: "Computer Style Software", correct: false },
        ],
    },
    {
        question: "Explain the term 'Responsive Design' in web development.",
        answers: [
            { text: "Designing for all devices", correct: true },
            { text: "Designing only for desktop", correct: false },
            { text: "Designing for print media", correct: false },
            { text: "Designing for audio devices", correct: false },
        ],
    },

    {
        question: "What is the purpose of the 'alt' attribute in HTML?",
        answers: [
            { text: "Alternative text for images", correct: true },
            { text: "Alignment of text", correct: false },
            { text: "Attribute list", correct: false },
            { text: "Animation control", correct: false },
        ],
    },
    {
        question: "Define 'API' in the context of web development.",
        answers: [
            { text: "Automated Programming Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Protocol Interface", correct: false },
            { text: "Automated Protocol Integration", correct: false },
        ],
    },
];

let currentQuestionIndex = 0;
let userScore = 0;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    welcomeScreenEl.style.display = "none";
    // quizScreenEl.style.display = "block";
    quizScreenEl.style.display = "flex";
    currentQuestionIndex = 0;
    userScore = 0;
    nextButtonEl.innerHTML = "Next";
    nextButtonEl.style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    resetContainer();
    questionEl.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }

        // console.log(buttonEl);

        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        console.log(userScore);
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = "true";
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;

    nextButtonEl.innerHTML = "Restart Quiz";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}
