const questions = [
    {
        question: "1. Who is the Father of our Nation?",
        options: ["Bhagat singh", "Mahatma Gandhi", "Narendra modi", "Sardar Vallabhbhai Patel "],
        answer: "Mahatma Gandhi"
    },
    {
        question: "2. Who was the first President of India?",
        options: ["Dr. Rajendra Prasad", "V. V. Giri", "Zakir Husain", "Sarvepalli Radhakrishnan"],
        answer: "Dr. Rajendra Prasad"
    },
    {
        question: "3. What is the largest mammal ?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "4. 11. India lies in which continent?",
        options: ["Europe", "Asia", "North America", "Antarctica"],
        answer: "Asia"
    },
    {
        question: "5. Who is known as Father of Indian Constitution?",
        options: ["Indira Gandhi", "Dr. B. R. Ambedkar","Jawaharlal Nehru", "Mahatma Gandhi"],
        answer: "Dr. B. R. Ambedkar"
    },
    {
        question: "6. Which is the most sensitive organ in our body? ",
        options: ["Heart", "Brain", "Skin", "Eye"],
        answer: "Skin"
    },
    {
        question: "7. Giddha is the folk dance of?",
        options: ["Maharashtra", "Uttar pradesh", "Punjab", "Haryana"],
        answer: "Punjab"
    },
    {
        question: "8. Who was the first Prime Minister of India?",
        options: ["Manmohan singh", "Narendra modi", "Jawaharlal Nehru", "Rahul Gandhi"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "9. Which is the heavier metal of these two? Gold or Silver?",
        options: ["silver", "Aluminium", "copper", "Gold"],
        answer: "Gold"
    },
    {
        question: "10. Who invented Computer?",
        options: ["Charles Babbage","Bill Gates","Alexander Fleming","Michael Faraday"],
        answer: "Charles Babbage"
    }
    
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => checkAnswer(option, question));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption, question) {
    if (selectedOption === question.answer) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = '';
    scoreElement.textContent = `Total Score: ${score}`;
}

showQuestion(questions[currentQuestionIndex]);

