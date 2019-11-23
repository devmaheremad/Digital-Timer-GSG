let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let btn = document.createElement("button");
let resetButton = document.createElement("button");
let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;

document.querySelectorAll(".digit").forEach(item => {

    if(item.innerHTML === "-") {item.innerHTML = "0"}
    }

);

resetButton.onclick = function() {

    document.querySelectorAll(".digit").forEach(item => {
        if(item.innerHTML != ":"){
            item.textContent = "0";
            document.getElementsByClassName("digits")[0].style.color = "#000";
            }
        }
    );
}

document.body.appendChild(btn);
btn.textContent = "Start The Timer";

document.body.appendChild(resetButton);
resetButton.textContent = "Reset";
btn.className = "btn";

btn.onclick = function timer(){
 
    let msTensTimer = setInterval(() => {
        document.getElementsByClassName("btn")[0].disabled = true;
        msTens.innerHTML = `${msTensCounter += 1}`;
        if (msTens.innerHTML === '9') {
            msTensCounter = 0;
            msTens.innerHTML = 0;
        }

    }, 10);

    let msHundredsTimer = setInterval(() => {
        
        msHundreds.innerHTML = `${msHundredsCounter += 1}`;
        if (msHundreds.innerHTML === '9') {
            msHundredsCounter = 0;
            msHundreds.innerHTML = 0;
        }

    }, 100);

    let secondOnesTimer = setInterval(() => {
        
        secondOnes.innerHTML = `${secondOnesCounter += 1}`;
        if (secondOnes.innerHTML === '9') {
            secondOnes.innerHTML = '0';
            secondOnesCounter = 0;
            secondTens.innerHTML = 1;
            clearInterval(msTensTimer);
            clearInterval(msHundredsTimer);
            clearInterval(secondOnesTimer);
            document.getElementsByClassName("digits")[0].style.color = "red";
            document.getElementsByClassName("btn")[0].disabled = false;
        }

    }, 1000);

};