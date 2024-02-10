var timer=60;
var score=0;
var hitrn=0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}



function MakeBubble(){
    counter=''
for(var i=0;i<=65;i++){
    var rn=Math.floor(Math.random()*10);
    counter=counter+`<div class="bubble">${rn}</div>`
}

document.querySelector('#bottom').innerHTML = counter;
}


function RunTimer(){
    var timerint=setInterval(function () { 
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer; 
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML= `<h1>Game Over</h1>`

        }
       
},1000)
}


document.querySelector("#bottom").addEventListener('click',function(dtls){
    var Clickednum = Number(dtls.target.textContent);
    if(Clickednum === hitrn){
        increaseScore();
        MakeBubble();
        getNewHit();
    }

});
RunTimer();
MakeBubble();
getNewHit();
increaseScore();