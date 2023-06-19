let playing = false;
let score;
let Result;
let wrongAnswers;
let position;
var x; 
var y;

//if we click on the start button
document.getElementById("start").onclick = function startGame() {
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        //score = 0
        score = 0;
        document.getElementById("score").innerHTML = score;

        document.getElementById("start").innerHTML = "Reset Game";
        
        //showCountdown
      TimeCounting();

      //Generate Question
      Question();
    }   
};

// to check if it is the correct and bring up a new question

for(let i = 1; i<5; i++){
    document.getElementById("btn"+i).onclick = function checkAnswers() {
        if(this.innerHTML == Result){
            show("correct");
            hide("wrong");

            //increament score
            score++
            document.getElementById("score").innerHTML = score;

            //let the correct disapper in a second
            setTimeout(function () {
                hide("correct");
            },1000);

            //bring a new question
            Question();
        }else{
            show("wrong");
            hide("correct");
            
             //let the correct disapper in a second
             setTimeout(function (){
                hide("wrong");
             },1000)
        }
    }
}

function TimeCounting() {
    Time = 60;

    var loopTime = setInterval(function(){
        Time -= 1;
        document.getElementById("countTime").innerHTML = Time;
        if(Time == 0){
            clearInterval(loopTime);
            hide("instruction");
            show("over");
            document.getElementById("over").innerHTML = "Game Over You Scored " + score ;
            document.getElementById("start").innerHTML = "Start Game";
            hide("timecounter");
            hide("wrong");
            hide("correct");
            hide("outPut");
            hide("btn");
        }
    },1000)
}


function Question(){
    x = 1 + Math.floor(9 * Math.random());
    y = 1 + Math.floor(9 * Math.random());
    Result = x * y;

     position = 1 + Math.floor(3 * Math.random());
    document.getElementById("btn"+position).innerHTML = Result;

    document.getElementById("outPut").innerHTML = x + " x " + y;

    for (let i = 1; i < 5; i++) {
         wrongAnswers = 1 + Math.floor(9 * Math.random());
        if (i != position) {
            document.getElementById("btn"+i).innerHTML = wrongAnswers;
        }
    }
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function hide(id){
    document.getElementById(id).style.display = "none";
}