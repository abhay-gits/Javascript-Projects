let getClock = document.getElementById('clock')
let input = document.getElementById('input')
let music = document.getElementById('music')
let stopBtn = document.getElementById('stopBtn')
setInterval(clock,1000)

function clock(){
    let time = new Date()
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(hr<10){
        hr = `0${hr}`;
    }
    if(min<10){
        min = `0${min}`;
    }
    if(sec<10){
        sec = `0${sec}`;
    }
    getClock.innerHTML = `${hr}:${min}:${sec}`
    if(input.value == `${hr}:${min}` && sec==1){
        music.play()
    }
}

stopBtn.addEventListener('click',()=>{
    music.load();
    
})


