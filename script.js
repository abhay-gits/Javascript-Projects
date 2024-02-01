let jokeArea = document.getElementById('joke-area')
let nextBtn = document.getElementById('next-btn')

function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(resolve=>resolve.json())
    .then(data=>{
        if(data.joke){
            jokeArea.innerHTML = data.joke;
        }else{
            jokeArea.innerHTML = `${data.setup}<br><span style="color:red">${data.delivery}</span>`;
        }
    })
}

nextBtn.addEventListener('click',()=>{
    getJoke();
})
getJoke();