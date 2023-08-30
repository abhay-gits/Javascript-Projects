let time = document.getElementById('time');
let shift = document.getElementById('shift');

setInterval(clock,1000);

function clock(){
    let ct = new Date();
    let hr = ct.getHours();
    let min =ct.getMinutes();
    let sec = ct.getSeconds();
   
    time.innerHTML = `${hr} : ${min} : ${sec}`;


    if(hr>12){
        shift.innerHTML = "PM";
    }
    else {
        shift.innerHTML = "AM";
    }
};