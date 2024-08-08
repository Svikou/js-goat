const questions = [
  {
    question: "le HTML est une perte de temps ?",
    reponse: false
  },
  {
    question: "Un dev REACT est un magicien ?",
    reponse: true
  },
  {
    question: "le CSS est une perte de temps ?",
    reponse: false
  },
  {
    question: "Laravel écrase php ?",
    reponse: true
  },
];

let currentQuestionI = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionI];
  document.getElementById('question').textContent = currentQuestion.question;
  document.getElementById('result').textContent = '';enableButtons();
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionI];
  const isCorrect = userAnswer === currentQuestion.reponse;
  
  document.getElementById('result').textContent = isCorrect ? "Bonne reponse!" : "Mauvaise reponse!";

  disableButtons();
  
  currentQuestionI++;
  if (currentQuestionI < questions.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    setTimeout(() => document.getElementById('result') .
    textContent = "Quizz terminé !", 2000)
  }
}

function disableButtons() {
  document.getElementById('true-btn').disabled = true;
  document.getElementById('false-btn').disabled = true;
}

function enableButtons() {
  document.getElementById('true-btn').disabled = false;
  document.getElementById('false-btn').disabled = false;
}

loadQuestion();
