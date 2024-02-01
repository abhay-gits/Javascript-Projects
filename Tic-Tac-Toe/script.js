let cells = document.querySelectorAll('.cell');
let record = document.getElementById('record');
let enterBtn = document.getElementById('enterBtn');
let gameOver = false;
let player = "X";
let p1 = "X";
let p2 = "O";

enterBtn.addEventListener('click',()=>{

    document.getElementById('hidden').style.display = 'block';
    document.getElementById('name').style.display = 'none';
    p1 = document.getElementById('p1').value;
    p2 = document.getElementById('p2').value;

})

//Applyind EventListener on Cells
cells.forEach((ap) =>{
    ap.addEventListener('click',()=>{

        if(!gameOver && !ap.textContent){

            ap.textContent = player;
            check();
            player = player === "X"?"O":"X";
        }

        
    })
})
//Possible Cases for Win
function check(){
    if([...cells].every(ap => ap.textContent) ){
        draw();
    }

const possibleCases = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
];

for(const combo of possibleCases){
    const [a,b,c] = combo;

    if(cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent){

            
            gameOver = true;
            
            if(player === "O"){
                record.innerHTML = "Winner is " + p2;
                alert(p2 + " is winner");
            }
            if(player === "X"){
                record.innerHTML ="Winner is " + p1;
                alert(p1 + " is winner");
            }
        
    }
}
};




  

//
//clear Button
//
let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    gameOver = false;
    player = "X";
    cells.forEach(cell =>{
        cell.textContent = "";
    })
});

//Draw
function draw(){
    gameOver = false;
    alert('Its a Draw');
}