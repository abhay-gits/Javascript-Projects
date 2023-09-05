let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let screen = document.getElementById('timer');
let sec = 0;
let msec = 0;
let min = 0;
let tId = null;

// START BUTTON
startBtn.addEventListener('click',()=>{
    if (tId!==null){
        clearInterval(tId);
    }
   tId =  setInterval(time,10)
});

//STOP BUTTON
stopBtn.addEventListener('click',()=>{
    clearInterval(tId);
})

//RESET BUTTON
resetBtn.addEventListener('click',()=>{
    clearInterval(tId);
    msec=sec=min = 0;
    screen.innerHTML = "00:00:00" ;
});

//START BUTTON FUNCTION
function time(){
    msec++;
    if(msec == 99){
        msec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++;
    }

   let secs = (sec<10)?`0${sec}`:sec;
   let msecs = (msec<10)?`0${msec}`:msec;
   let mins = (min<10)?`0${min}`:min;
    screen.innerHTML = `${mins}:${secs}:${msecs}`;
};

