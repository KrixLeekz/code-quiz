var playBtn = document.querySelector("#playBtn");
var viewHs1 = document.querySelector(".viewHs");
var viewHs2 = document.querySelector("#viewHs");
var timer = document.querySelector(".timer");

var interval;
var stillPlaying = false;
var timerVal = 100;
timer.textContent = timerVal;

let questions = [
    {
        question: "What declares variables?",
        answers: ["var", "int", "new", "static"],
        correctIDX: 0
    },
    {
        question: "What does null mean?",
        answers: ["bare", "too many loops", "zero", "void"],
        correctIDX: 2
    },
]

function init(){
    timerVal = 100;
    console.log(JSON.stringify(questions[1].question))
}

function startGame() {
    playBtn.style.visibility = "hidden";
    viewHs1.style.visibility = "hidden";
    viewHs2.style.visibility = "hidden";
    stillPlaying = true;

    interval = setInterval(function () {
        if (stillPlaying) {
          timerVal--;
    
          if (timerVal === 0) {
            clearInterval(interval);
            gameOver();
          }

          timer.textContent = timerVal;
        }
      }, 1000);
}

function gameOver(){}


init();

playBtn.addEventListener("click", startGame);