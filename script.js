let elements = document.getElementsByClassName("quadrado");

for(let element of elements){
    element.addEventListener("click", function(){
        element.innerText = "X";
    })
}