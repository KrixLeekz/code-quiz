var playBtn = document.querySelector("#playBtn");
var viewHs1 = document.querySelector(".viewHs");
var viewHs2 = document.querySelector("#viewHs");
var timer = document.querySelector(".timer");
var QBank = document.querySelector("#current-question-bank");

var interval;
var questionIndex;
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
    {
        question: "When do while loops stop?",
        answers: ["when the global variables are deleted", "when you close the browser", "when DOMS collide", "when the condition is false"],
        correctIDX: 3
    },
    {
        question: "How great is Apple?",
        answers: ["it's horrible", "same phone just more cameras", "why would you ever buy from them", "all of the above"],
        correctIDX: 3
    },
    {
        question: "How hard is coding?",
        answers: ["its easyyy", "never give up", "no one can do it", "better off being a lawyer"],
        correctIDX: 2
    },
]

function init(){
    timerVal = 100;
    questionIndex = 0;
}

function startGame() {
    playBtn.style.visibility = "hidden";
    viewHs1.style.visibility = "hidden";
    viewHs2.style.visibility = "hidden";
    stillPlaying = true;

    renderQuestion();

    interval = setInterval(function () {
        if (stillPlaying) {
          timerVal--;
    
          if (timerVal <= 0) {
            clearInterval(interval);
            stillPlaying = false;
            gameOver();
          }

          timer.textContent = timerVal;

          if (questionIndex === questions.length) {
              stillPlaying = false;
              gameOver();
          }
        }
      }, 1000);

    
}

function renderQuestion() {
    var ques = document.createElement("h2");
    ques.textContent = JSON.stringify(questions[questionIndex].question);
    QBank.appendChild(ques);

    
    for(let i=0; i < questions[questionIndex].answers.length; i++){
        var li = document.createElement("li");
        var answers = document.createElement("button");
        answers.textContent = JSON.stringify(questions[questionIndex].answers[i]);
        answers.setAttribute("data-index", i)

        QBank.appendChild(li);
        li.appendChild(answers);
    }

    QBank.addEventListener("click", function(event){
        var element = event.target;
        if(element.matches("button")){
            var index = element.getAttribute("data-index");
            if(index == JSON.stringify(questions[questionIndex].correctIDX)){
                var h3R = document.createElement("h3");
                h3R.textContent = "Correct!";
                QBank.appendChild(h3R);

                questionIndex++;
                clearQuestion();
                renderQuestion();

            }else {
                var h3W = document.createElement("h3");
                h3W.textContent = "Wrong, minus 10";
                QBank.appendChild(h3W);

                timerVal -= 10;
            }

        }
    });
}

function clearQuestion(){
    while(QBank.hasChildNodes()){
        QBank.removeChild(QBank.childNodes[0]);
    }
}

function gameOver(){
    
}


init();

playBtn.addEventListener("click", startGame);