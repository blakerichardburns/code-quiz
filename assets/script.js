var timer = document.querySelector("#timer");
var leaderButton = document.querySelector("#go-to-leaders");
var quizGreeting = document.querySelector("#quiz-greeting");
var beginButton = document.querySelector("#start-quiz");
var questionsSection = document.querySelector("#questions-section");
var quizQuestion = document.querySelector("#quiz-question");
var quizAnswer1 = document.querySelector("#question-one");
var quizAnswer2 = document.querySelector("#question-two");
var quizAnswer3 = document.querySelector("#question-three");
var feedback = document.querySelector("#feedback");
var resultsSection = document.querySelector("#results-section");
var scoreMessage = document.querySelector("#score-message");
var intitalBox = document.querySelector("#initial-box");
var scoreButton = document.querySelector("#post-score");
var leaderboardSection = document.querySelector("#leaderboard");
var doOverButton = document.querySelector("#do-over");

var currentAnswer = "";
var secondsLeft = 300;
var score = 0;
var rightAnswerMessage = "Correct!";
var wrongAnswerMessage = "Incorrect!";
var questionsAnswers = [
  {
    question: "In which type of file would you find a For Loop?",
    possibleAnswers: ["-HTML", "-CSS", "-JavaScript"],
    correctAnswer: "-JavaScript",
  },
  {
    question: "Which JS Function outputs a message in DevTools?",
    possibleAnswers: ["-console.log", "-for Loop", "-valueOf"],
    correctAnswer: "-Console Log",
  },
  {
    question:
      "Which JavaScript Function can add functionality to a mouse click?",
    possibleAnswers: ["-setAttribute", "-addEventListener", "-querySelector"],
    correctAnswer: "-addEventListener",
  },
  {
    question:
      "Which function undoes browser settings that can prohibit JavaScript code from functioning correctly?",
    possibleAnswers: ["-Web API", "-preventDefault", "-Local Storage"],
    correctAnswer: "-preventDefault",
  },
];

function runningTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "TIME LEFT: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      quizOver();
    }
  }, 1000);
}

function quizOver() {
  questionsSection.setAttribute("style", "display: none");
  resultsSection.setAttribute("style", "display: block");
}

beginButton.addEventListener("click", function () {
  runningTimer();

  quizGreeting.setAttribute("style", "display: none");
  questionsSection.setAttribute("style", "display: block");

  quizQuestion.textContent = questionsAnswers[0].question;
  quizAnswer1.textContent = questionsAnswers[0].possibleAnswers[0];
  quizAnswer2.textContent = questionsAnswers[0].possibleAnswers[1];
  quizAnswer3.textContent = questionsAnswers[0].possibleAnswers[2];

  var currentAnswer = questionsAnswers[0].correctAnswer;
});

document
  .querySelector("#questions-section li")
  .addEventListener("click", function (event) {
    if (event.target == currentAnswer) {
      score + 25;
      feedback.textContent = rightAnswerMessage;
    } else {
      secondsLeft - 30;
      feedback.textContent = wrongAnswerMessage;
    }

    quizQuestion.textContent = questionsAnswers[1].question;
    quizAnswer1.textContent = questionsAnswers[1].possibleAnswers[0];
    quizAnswer2.textContent = questionsAnswers[1].possibleAnswers[1];
    quizAnswer3.textContent = questionsAnswers[1].possibleAnswers[2];

    var currentAnswer = questionsAnswers[1].correctAnswer;
  });

document
  .querySelector("#questions-section li")
  .addEventListener("click", function (event) {
    if (event.target == currentAnswer) {
      score + 25;
      feedback.textContent = rightAnswerMessage;
    } else {
      secondsLeft - 30;
      feedback.textContent = wrongAnswerMessage;
    }

    quizQuestion.textContent = questionsAnswers[2].question;
    quizAnswer1.textContent = questionsAnswers[2].possibleAnswers[0];
    quizAnswer2.textContent = questionsAnswers[2].possibleAnswers[1];
    quizAnswer3.textContent = questionsAnswers[2].possibleAnswers[2];

    var currentAnswer = questionsAnswers[2].correctAnswer;
  });

document
  .querySelector("#questions-section li")
  .addEventListener("click", function (event) {
    if (event.target == currentAnswer) {
      score + 25;
      feedback.textContent = rightAnswerMessage;
    } else {
      secondsLeft - 30;
      feedback.textContent = wrongAnswerMessage;
    }

    quizQuestion.textContent = questionsAnswers[3].question;
    quizAnswer1.textContent = questionsAnswers[3].possibleAnswers[0];
    quizAnswer2.textContent = questionsAnswers[3].possibleAnswers[1];
    quizAnswer3.textContent = questionsAnswers[3].possibleAnswers[2];

    var currentAnswer = questionsAnswers[3].correctAnswer;
  });

document
  .querySelector("#questions-section li")
  .addEventListener("click", function (event) {
    if (event.target == currentAnswer) {
      score + 25;
      feedback.textContent = rightAnswerMessage;
    } else {
      secondsLeft - 30;
      feedback.textContent = wrongAnswerMessage;
    }

    quizOver();
  });

function addScore() {
  //click event logs initials and score to leaderboard

  resultsSection.setAttribute("style", "display: none");
  leaderboardSection.setAttribute("style", "display: block");
}

doOverButton.addEventListener("click", function () {
  return;
});

leaderButton.addEventListener("click", function () {
  quizGreeting.setAttribute("style", "display: none");
  questionsSection.setAttribute("style", "display: none");
  resultsSection.setAttribute("style", "display: none");
  leaderboardSection.setAttribute("style", "display: block");
});
