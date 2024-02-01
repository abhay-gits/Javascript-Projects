let time = document.getElementById('time');
let shift = document.getElementById('shift');

setInterval(clock,1000);

function clock(){
    let ct = new Date();
    let hr = ct.getHours();
    let min =ct.getMinutes();
    let sec = ct.getSeconds();

    if(sec<10){
        sec = `0${sec}`
    };
    if(hr<10){
        hr = `0${hr}`
    };
    if(min<10){
        min = `0${min}`
    };
   
    time.innerHTML = `${hr} : ${min} : ${sec}`;


    if(hr>12){
        shift.innerHTML = "PM";
    }
    else {
        shift.innerHTML = "AM";
    }
};