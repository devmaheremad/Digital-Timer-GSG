let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let btn = document.createElement("button");
let resetButton = document.createElement("button");
let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let fieldsetForBtn = document.createElement("fieldset");
let fieldsetForTimer = document.createElement("fieldset");
fieldsetForBtn.style = "padding: 20px;margin: 20px auto;text-align: center;width: 300px"
document.body.insertBefore(fieldsetForBtn, document.body.firstElementChild);

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

fieldsetForBtn.appendChild(btn);
btn.textContent = "Start The Timer";

fieldsetForBtn.appendChild(resetButton);
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

document.querySelectorAll("button").forEach(item => item.style = "box-shadow:inset 0px 0px 11px 2px #bbdaf7;background-color:#15589b;border-radius:50px 0 50px 0;border:2px solid #84bbf3;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;font-weight:bold;font-style:italic;padding:9px 24px;text-decoration:none;outline: none");

document.querySelectorAll("button").forEach(item => item.onmouseover = function() {
    this.style = "background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);background-color:#378de5;box-shadow:inset 0px 0px 11px 2px #bbdaf7;background-color:#15589b;border-radius:50px 0 50px 0;border:2px solid #84bbf3;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;font-weight:bold;font-style:italic;padding:9px 24px;text-decoration:none;outline: none";
});

document.querySelectorAll("button").forEach(item => item.onmouseleave = function() {
    this.style = "box-shadow:inset 0px 0px 11px 2px #bbdaf7;background-color:#15589b;border-radius:50px 0 50px 0;border:2px solid #84bbf3;display:inline-block;cursor:pointer;color:#ffffff;font-family:Arial;font-size:17px;font-weight:bold;font-style:italic;padding:9px 24px;text-decoration:none;outline: none";
});