//selecting all elements which will change while playing
var welcomeScreen = document.querySelector(".welcome-screen");
var howToPlayScreen = document.querySelector(".how-to-play");
var container = document.querySelector(".container");
var quizOver = document.querySelector(".quiz-over");
var userInput = document.getElementById("display_input");
var question = document.getElementById("question");
var levelinfo = document.getElementById("levelinfo");
var scoreinfo = document.getElementById("scoreinfo");
var skipinfo = document.getElementById("skipinfo");
var startBtn = document.getElementById("start-Btn");
var skipBtn = document.getElementById("skip-Btn");
var howBtn = document.getElementById("how-Btn");
var result = document.getElementById("result");
var score = 0;
var skips = 10;
var level = 1;
var questionCount = 0;
//function to hide start button and display questions
function displayQuestion() {
  ++questionCount;
  levelChange();
  if (level <= 5) {
    welcomeScreen.style.display = "none";
    howToPlayScreen.style.display = "none";
    quizOver.style.display = "none";
    container.style.display = "flex";
  } else {
    container.style.display = "none";
    quizOver.style.display = "flex";
    result.innerText = score;
  }
  userInput.value = "";
  question.innerText = randomNumber() + randomOperator() + randomNumber();
}

function displayHowToPlay() {
  welcomeScreen.style.display = "none";
  howToPlayScreen.style.display = "flex";
}

function levelChange() {
  if (questionCount > 3) {
    levelinfo.innerText = ++level;
    questionCount = 1;
  } else levelinfo.innerText = level;
}

//function to check if user input equals the solution of question or not
//Updating score and background respectively
function submit() {
  if (userInput.value == "") alert("Empty Input");
  else {
    if (evaluate() == userInput.value) {
      scoreinfo.innerText = ++score;
      if (score > 0) container.style.borderColor = "green";
      displayQuestion();
    } else {
      scoreinfo.innerText = --score;
      if (score < 0) container.style.borderColor = "tomato";
      displayQuestion();
    }
  }
}
//recalling displayQuestion function to skip the current problem
function skip() {
  if (skips > 0) {
    displayQuestion();
    skipinfo.innerText = --skips;
  } else {
    skipinfo.innerText = "No more skips left Good Luck !";
    skipinfo.style.color = "tomato";
  }
}
//finding random numbers and opeartors
function randomNumber() {
  return Math.floor(Math.random() * multipleofTen());
}

function multipleofTen() {
  var tens = 10;
  return tens ** level;
}

function randomOperator() {
  var operatorarray = ["+", "-", "*", "/", "%", "**"];
  return operatorarray[Math.floor(Math.random() * operatorarray.length)];
}

//evaluating the result of question generated
function evaluate() {
  return Math.floor(eval(question.innerText));
}

//Using Enter key to submit
function enterkeypressed() {
  if (event.keyCode == 13) submit();
}
