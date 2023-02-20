let button = document.querySelectorAll("button");
let screen = document.getElementById("screen");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function(){
        if (button[i].innerHTML == "=") {
            screen.innerHTML = eval(screen.innerHTML)
        }else if (button[i].innerHTML == "ac"){
            screen.innerHTML = " "
        }else{
            screen.innerHTML += button[i].innerHTML
        }
    })    
}