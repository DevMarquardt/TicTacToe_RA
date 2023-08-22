let elements = document.getElementsByClassName("quadrado");

let count = 0;

for(let element of elements){
    element.addEventListener("click", event => {
        count ++ ;
        if(count % 2 == 0){
            event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.2" radius="20"></a-box>';
        } else{
            event.target.innerHTML += '<a-circle color="green" radius="1" rotation="0 0 0.2"></a-circle>';
        }
    })
}