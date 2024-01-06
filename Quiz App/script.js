const quizData = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicoptioners Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicoptioners Terminals Motorboats Lamborginis",
        correct: "b",
    }
];


let question = document.getElementById('question');
let option = document.querySelectorAll("input[type='radio']")
const button = document.getElementById('btn');
let index = 0;
let correct = 0;
let wrong = 0;
let length = quizData.length;

/* Load Quiz */
function loadData() {
    let data = quizData[index];
    if(length === index){
        quizEnd();
    }
    reset();
    question.innerHTML = data.question;
    option[0].nextElementSibling.textContent = data.a;
    option[1].nextElementSibling.textContent = data.b;
    option[2].nextElementSibling.textContent = data.c;
    option[3].nextElementSibling.textContent = data.d;
}

/* Submit Button */
button.addEventListener('click', () => {
    const data = quizData[index];
    let ans = getAns();
    if (ans == data.correct) {
        correct++;
    } else {
        wrong++;
    }
    index++;
    loadData()

});

/* Calculate Answer */
function getAns() {
    let ans;
    const data = quizData[index];
    option.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    })
    return ans;
}

/* Reset Radio Button */
function reset(){
    option.forEach((input)=>{
        input.checked = false;
    })
}

/* Quiz End */
function quizEnd(){
    document.getElementsByClassName('container')[0].innerHTML = `
    <div class="col">
            <h3 class="width"> Game Over!  You Scored : ${correct} / ${length} </h3>
        </div>
    `
}
loadData(index)

















