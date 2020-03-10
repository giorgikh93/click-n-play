let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let wrap = document.getElementById('wrapper')
let input = document.getElementById('input')
let start = document.getElementById('start')
let timer = document.getElementById('timer')
let turn = document.getElementsByClassName('turn')[0]
let playerF = document.getElementById('playerF')
let playerS = document.getElementById('playerS')
let text = document.getElementById('text')
let text2 = document.getElementById('text2')
let timerValue = Number(prompt('Choose game duration'));
if(timerValue === '' || isNaN(timerValue) || timerValue === null){
    alert('You have to write number');
   timerValue =  Number(prompt('Choose game duration'));
}
let playerFirst = prompt(`Write player 1 name`)
let playerSecond = prompt(`Write player 2 name`)
alert('Click START Button');
playerF.innerHTML = playerFirst.toUpperCase();
playerS.innerHTML = playerSecond.toUpperCase();



congrats.innerHTML = 'CONGRATULATION ! ! !';
let anim = document.getElementById('animation');
for(let i = 0; i<300; i++){
    let randomColors = ['red','blue','yellow','purple','green','#F51F02','#s0EF7D4','#F77F0E','aqua','chartreuse'];
  let color = Math.floor(Math.random() * randomColors.length);
    $(anim.firstElementChild.children[i]).css('backgroundColor', randomColors[color]);
}



for(let i = 0; i<300; i++){
    let randomColors = ['red','blue','yellow','purple','green','pink','#s0EF7D4','#F77F0E','aqua','chartreuse'];
  let color = Math.floor(Math.random() * randomColors.length);
    $(congrats).css('color', randomColors[color]);
}





let count = 0;
if(timerValue && playerFirst && playerSecond){ 
start.onclick = function () {
    start.style.color = 'green';
    player1 = setInterval(myFunction, 1000);
    timer.value = timerValue;
    btn.onclick = function () {
        count = count + 1;
        inp.value = count;
    }
    function myFunction() {
        if (timer.value > 0) {
            timer.value -= 1;
        } else if (timer.value == 0) {
            clearInterval(player1)
            // timer.value === 0;
            score1.innerHTML = inp.value;
            btn.onclick = function () {
                event.preventDefault()
            }
            turn.classList.add('block')
        }
    }
}
}
turn.onclick = function () {
    turn.classList.remove('block');
    turn.classList.add('none');
    timer.value = timerValue;
    inp.value = 0;
    count = 0;
    player2 = setInterval(func, 1000);

    btn.onclick = function () {
        count = count + 1;
        inp.value = +count;
    }

    function func() {
        if (timer.value > 0) {
            timer.value -= 1;
        } else if (timer.value == 0) {
            clearInterval(player2)
            // timer.value === 0;
            score2.innerHTML = inp.value;
            again.classList.add('block2')
            text.innerHTML =`: made ` + (score1.innerHTML / timerValue) + ` clicks in one second`;
            text2.innerHTML =`: made ` + (score2.innerHTML / timerValue) + ` clicks in one second`;
            alert(winner())
            getScoreColor()
            btn.onclick = function () {
                event.preventDefault()
            }
        }

    }

}
function winner() {
    if (+score1.innerHTML > +score2.innerHTML) {
        congrats.style.display = 'block';
        anim.style.display = 'block';
        return 'Congrats!! ' + playerF.innerHTML + ' you are lucky :)';
    } else if (+score1.innerHTML === +score2.innerHTML) {
        return 'TIE';
    } else if (+score2.innerHTML > +score1.innerHTML) {
        congrats.style.display = 'block';
        anim.style.display = 'block';
        return 'Congrats!! ' + playerS.innerHTML + ' you are lucky :)';
    }
}

function getScoreColor() {
    if (+score2.innerHTML > +score1.innerHTML) {
        score2.style.fontSize = '25px';
        score2.style.color = 'chartreuse';
        score1.style.color = 'red';
        score1.style.fontSize = '25px';
    } else if (+score1.innerHTML > +score2.innerHTML) {
        score2.style.fontSize = '25px';
        score2.style.color = 'red';
        score1.style.color = 'chartreuse';
        score1.style.fontSize = '25px';
    } else if (+score2.innerHTML === +score1.innerHTML) {
        score2.style.fontSize = '25px';
        score2.style.color = 'yellow';
        score1.style.color = 'yellow';
        score1.style.fontSize = '25px';
    }

}
