let elements = document.getElementsByClassName("quadrado");

for(let element of elements){
    element.addEventListener("click", function(){
        element.innerText = `<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.2" radius="20"></a-box>`;
    })
}