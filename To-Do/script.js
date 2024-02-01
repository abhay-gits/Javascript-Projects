let inputText = document.getElementById('inputText');
let btn = document.getElementById('btn');
let area = document.getElementById('area');

btn.addEventListener('click',task);

function task(){
    let input = inputText.value.trim();

    if(input!==""){
      const li = document.createElement("li");
        li.textContent = input;

        const del = document.createElement('button');
        del.textContent = "Delete";
        del.addEventListener('click',()=>{
            area.removeChild(li);
        })

            li.appendChild(del);
            area.appendChild(li);
            inputText.value ="";
    }
}