let x = document.getElementById("i");
buttons = document.querySelectorAll("button");
let output = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        text = e.target.innerText;
        if(text=='='){
            x.value = eval(output);
        }
        else if(text=='x'){
            text='*';
            output+=text;
            x.value = output;
        }
        else if(text=='C'){
            output = "";
            x.value="";
        }
        else{
           output+=text;
            x.value =output;
        }
    })
}