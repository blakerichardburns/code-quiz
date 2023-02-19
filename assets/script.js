var beginButton = document.querySelector('#start-quiz-button');
var timer = document.querySelector('#timer');
var timeLeft;
var TIMER_START_SECONDS = 60;
var timerInterval;
var quizSection = document.querySelector('.quiz-container');
var quizQuestion = document.querySelector('#quiz-question');
var answersList = document.querySelector('.answers-list');
var answerFeedback = document.querySelector('#answer-feedback');
var postScoreSection = document.querySelector('#post-score-section');
var initialsInput = document.querySelector('#initials-input-form');
var postScoreButton = document.querySelector('#post-score-button');
var quizOverMessage = document.querySelector('#end-quiz-message');
var resultsSection = document.querySelector('#results-section');
var leaderboard = document.querySelector('#leaderboard');

var questionsAndAnswersArray = [
  {
    question: 'In which type of file would you find a For Loop?',
    answerOptions: ['HTML', 'CSS', 'JavaScript'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'Which JS Function outputs a message in DevTools?',
    answerOptions: ['console.log', 'for Loop', 'valueOf'],
    correctAnswer: 'console.log',
  },
  {
    question:
      'Which JavaScript Function can add functionality to a mouse click?',
    answerOptions: ['setAttribute', 'addEventListener', 'querySelector'],
    correctAnswer: 'addEventListener',
  },
  {
    question:
      'Which function undoes browser settings that can prohibit JavaScript code from functioning correctly?',
    answerOptions: ['Web API', 'preventDefault', 'Local Storage'],
    correctAnswer: 'preventDefault',
  },
];

beginButton.addEventListener('click', quiz);

function runningTimer() {
  timeLeft = TIMER_START_SECONDS;
  timer.textContent = timeLeft;

  timerInterval = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timer.textContent = timeLeft;
    } else {
      quizOver();
    }
  }, 1000);
}

function quiz() {
  beginButton.setAttribute('style', 'display: none;');
  answerFeedback.textContent = '';
  resultsSection.setAttribute('style', 'display:none;');

  runningTimer();
  nextQuestion(0);
}

function nextQuestion(questionIndex) {
  if (questionIndex >= questionsAndAnswersArray.length) {
    quizOver();
    return;
  }
  answersList.innerHTML = '';
  var currentQuestion = questionsAndAnswersArray[questionIndex];
  quizQuestion.textContent = currentQuestion.question;

  for (var i = 0; i < currentQuestion.answerOptions.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = currentQuestion.answerOptions[i];

    liElement.addEventListener('click', function (event) {
      if (event.target.textContent === currentQuestion.correctAnswer) {
        timeLeft += 10;
        timer.textContent = timeLeft;
        answerFeedback.textContent = 'Correct! +10';
      } else {
        timeLeft -= 10;
        timer.textContent = timeLeft;
        answerFeedback.textContent = 'Incorrect! -10';
      }

      nextQuestion(questionIndex + 1);
    });

    answersList.appendChild(liElement);
  }
}

function quizOver() {
  quizQuestion.textContent = '';
  answersList.innerHTML = '';
  beginButton.setAttribute('style', 'display: block;');
  beginButton.textContent = 'Want a better score? Click Here';
  postScoreSection.setAttribute('style', 'display: block;');
  resultsSection.setAttribute('style', 'display:block');
  leaderboard.setAttribute('style', 'display: none');
  clearInterval(timerInterval);
}

postScoreButton.addEventListener('click', postScore);

function postScore() {
  answerFeedback.textContent = '';
  var userInitials = initialsInput.value;

  if (userInitials.length !== 3) {
    quizOverMessage.textContent = 'Input exaclty 3 letters.';
    return;
  }

  var scoresList = localStorage.getItem('scoresList');

  if (scoresList === null) {
    scoresList = [];
  } else {
    scoresList = JSON.parse(scoresList);
  }

  scoresList.push({
    initials: userInitials,
    score: timeLeft,
  });

  scoresList = scoresList.sort(function (a, b) {
    return b.score - a.score;
  });

  localStorage.setItem('scoresList', JSON.stringify(scoresList));

  displayScoresList(scoresList);
  initialsInput.value = '';
  postScoreSection.setAttribute('style', 'display: none;');

}

function displayScoresList(scoresList) {
  leaderboard.innerHTML = '';
  for (var i = 0; i < scoresList.length; i++) {
    var currentScore = scoresList[i];
    var liElement = document.createElement('li');
    liElement.textContent = `${currentScore.initials}: ${currentScore.score}`;

    leaderboard.appendChild(liElement);
  }

  leaderboard.setAttribute('style', 'display: block');
}
