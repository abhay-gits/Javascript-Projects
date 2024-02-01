let screen = document.getElementById('screen');
let btn = document.querySelectorAll('button');
let string ="";

let arr = Array.from(btn);
arr.forEach(button =>{
    

button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string = eval(string);
        screen.value = string;
    }
    else if(e.target.innerHTML=="AC"){
        string = '';
        screen.value = string;
    }
    else if(e.target.innerHTML =="D"){
        string = string.substring(0,string.length-1);
        screen.value =string;
    }
    else{
        string += e.target.innerHTML;
        screen.value = string;
    }
})
});
