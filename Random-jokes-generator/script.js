let jokeArea = document.getElementById('joke-area')
let hindiBtn = document.getElementById('hindi-btn')
let englishBtn = document.getElementById('english-btn')
const apiKey = 'api_key_here';

/*function for English Joke */
function englishJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(resolve=>resolve.json())
    .then(data=>{
        console.log(data)
        if(data.joke){
            jokeArea.innerHTML = data.joke;
        }else{
            jokeArea.innerHTML = `${data.setup}<br><span style="color:red">${data.delivery}</span>`;
        }
    })
}
/*function for Hindi Joke */
function hindiJoke(){
    let apiURL = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`;
    fetch(apiURL)
    .then(resolve=>resolve.json())
    .then(data=>{
        console.log(data)
            jokeArea.innerHTML = data.jokeContent;
    })
}
/* Event Handlers */
englishBtn.addEventListener('click',()=>{
    englishJoke();
})
hindiBtn.addEventListener('click',()=>{
    hindiJoke();
})
