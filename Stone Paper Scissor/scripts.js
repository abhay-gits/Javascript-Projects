let startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click',()=>{
    let firstPage = document.getElementById('first-page');
    let secondPage = document.getElementById('second-page');
    firstPage.style.display="none";
    secondPage.style.visibility="visible";
});

// Main Content 
let bot = document.getElementById('bot-side');
let user = document.getElementById('user-side');
let btns = document.querySelectorAll('.btns');
let result = document.getElementById('result')
let player;
let computer;
let final;

btns.forEach(button => button.addEventListener('click',()=>{
    player = button.textContent; 
    botValue();
    user.textContent = `Player :${player}`
    bot.textContent = `Computer :${computer}`;
    final = winner();
    result.textContent = `Result :${final}`
    
}))

function botValue(){
    let rand = Math.floor((Math.random()*(3-1+1))+1);
    switch(rand){
        case 1:
            computer = "Stone";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissor"
            break;
    }    
}

function winner(){
    if(player == computer){
        return "Draw";
    }
    else if(player == "Stone"){
        return(computer == "Scissor")?"You Win" : "You Loose";
    }
    else if(player == "Paper"){
        return(computer == "Stone")?"You Win" : "You Loose"
    }
    else if(player == "Scissor"){
        return(computer == "Paper")?"You Win" : "You Loose"
    }
}