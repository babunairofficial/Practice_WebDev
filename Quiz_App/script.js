const questions = [
    {
        question: "The word “Mangal” is used for which among the following kinds of vegetations?",
        answers: [
            { text: "Aquatic Plants", correct: false},
            { text: "Algal Blooms", correct: false},
            { text: "Mangroves", correct: true},
            { text: "Mediterranean forests, woodlands, and scrub", correct: false},
        ]
    },
    {
        question: "India’s largest petrochemical complex is located at",
        answers: [
            { text: "Gujarat", correct: true},
            { text: "Maharashtra", correct: false},
            { text: "Rajasthan", correct: false},
            { text: "Assam", correct: false},
        ]
    },
    {
        question: "How many Delimitation Commissions have been constituted by the Government of India till December 2023?",
        answers: [
            { text: "One", correct: false},
            { text: "Two", correct: false},
            { text: "Three", correct: false},
            { text: "Four", correct: true},
        ]
    },
    {
        question: "Under which of the following Articls of the Constitution of India, has the Supreme Court of India placed the Right to Privacy?",
        answers: [
            { text: "Article 15", correct: false},
            { text: "Article 16", correct: false},
            { text: "Article 19", correct: false},
            { text: "Article 21", correct: true},
        ]
    },
    {
        question: "Operations undertaken by the Army towards upliftment of the local population in remote areas to include addressing of their basic needs is called:",
        answers: [
            { text: "Operation Sankalp", correct: false},
            { text: "Operation Maitri", correct: false},
            { text: "Operation Sadbhavana", correct: true},
            { text: "Operation Madam", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();