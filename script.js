let elements = document.getElementsByClassName("quadrado");

for(let element of elements){
    element.addEventListener("click", event => {
            event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.2" radius="20"></a-box>';
    })
}