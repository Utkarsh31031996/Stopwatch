// ..............................................Inital Value(of tens, seconds, mins)......................
let tens=00;
let seconds=00;
let mins=00;
// ..............................................Select the Timer element by using getElementById...............
let timer = document.getElementById('timer')
let getSeconds = document.getElementById('seconds');
let getTens = document.getElementById('tens');
let getMins = document.getElementById('mins');

// ...............................................Select the Buttons by using getElementById
let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let btnReset = document.getElementById('btn-reset');

let interval;            /**..............Creating a Variable..............................*/

btnStart.addEventListener('click',function() {                /**Applying click event to btnStart button  */
    clearInterval(interval);                                   
    interval = setInterval(startTimer, 10);
    timer.style.color='#F6B400';
})
// .........................................................................................................

btnStop.addEventListener('click',function(){                   /**Applying click event to btnStop button  */
    clearInterval(interval);                                   /** clearInterval clear the timer interval */
});
// .........................................................................................................

btnReset.addEventListener('click',function(){                  /**Applying click event to btnStop button  */
    clearInterval(interval);                                    /** clearInterval clear the timer interval */
    tens='00';                                                  /**It set tens, seconds, mins to 0 and print in the window screen */
    seconds='00';
    mins= '00';
    getTens.innerText =tens;
    getSeconds.innerText = seconds;
    getMins.innerText = mins
});
// ..........................................................................................................

function startTimer(){                                 /**srartTimer Function */
    tens++;
    if(tens<=9){
        getTens.innerText = '0'+ tens;
    }
    if(tens>9){
        getTens.innerText = tens;
    }
    if(tens>99){
        seconds++;
        getSeconds.innerText = '0' + seconds;
        tens=0;
        getTens.innerText = '0'+ 0;
    }
    if(seconds>9){
        getSeconds.innerText = seconds;
    }
    if(seconds>59){
        mins++;
        getMins.innerText = '0'+ mins;
        seconds = 0;
        getSeconds.innerText ='0'+ 0;
    }
    if(mins>9){
        getSeconds.innerText = mins;
    }
}
// .......................................................................................................
