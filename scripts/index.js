let startBtn = document.createElement('button');
let reset = document.createElement('button');
let place = document.createElement('fieldset');

let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

let msTensTimer;
let msHundredsTimer;

place.className = 'btncon';

document.body.insertBefore(place, document.body.firstElementChild);

place.insertBefore(startBtn, place.firstElementChild);
startBtn.textContent = 'Start Timer';

place.insertBefore(reset, place.children[1]);
reset.textContent = 'Reset All';

// This Function For Start Timer To 10S: 
startBtn.onclick = function getTimer() {

    getMsTensTimer();
    getMsHundredsTimer();
    getSecondOnesTimer();

    startBtn.disabled = true;

    document.querySelectorAll('.digit').forEach(item => item.style.color = 'black');

    document.querySelectorAll('button')[0].style = 'color: rgb(27, 27, 27); border: 1px dotted white';

};

// This Function For Reset EveryThings To Zero Time: 
reset.onclick = function getreset() {

    msTens.textContent = '0';
    msHundreds.textContent = '0';
    secondOnes.textContent = '0';
    secondTens.textContent = '0';
    document.querySelectorAll('.digit').forEach(item => item.style.color = 'black');

};

// This Function For count 10ms:  
function getMsTensTimer() {

    msTens.textContent = '0';

    msTensTimer = setInterval(() => {

        msTens.textContent = (+msTens.textContent + 1);

        if (msTens.textContent === '10') {

            msTens.textContent = '0';

        };

    }, 10);

};

// This Function For count 100ms:  
function getMsHundredsTimer() {

    msHundreds.textContent = '0';

    msHundredsTimer = setInterval(() => {

        msHundreds.textContent = (+msHundreds.textContent + 1);

        if (msHundreds.textContent === '10') {

            msHundreds.textContent = '0';

        };

    }, 100);

};

// This Function For count 1000ms:  
function getSecondOnesTimer() {

    secondOnes.textContent = '0';
    secondTens.textContent = '0';

    let secondOnesTimer = setInterval(() => {

        secondOnes.textContent = (+secondOnes.textContent + 1);

        if (secondOnes.textContent === '10') {

            msTens.textContent = '0';
            msHundreds.textContent = '0';
            secondOnes.textContent = '0';
            secondTens.textContent = '1';
            clearInterval(msTensTimer);
            clearInterval(msHundredsTimer);
            clearInterval(secondOnesTimer);
            document.querySelectorAll('.digit').forEach(item => item.style.color = 'red');
            startBtn.disabled = false;
            document.querySelectorAll('button')[0].style = 'color: white;';

        };

    }, 1000);

};