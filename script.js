let elements = document.getElementsByClassName("quadrado");

let count = 0;

for(let element of elements){
    element.addEventListener("click", event => {
        count ++ ;
        let temPeca = verificaPecaTem(event.target.innerHTML);
        if(!temPeca){
            if(count % 2 == 0){
                event.target.innerHTML += '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>';
            } else{
                event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>';
            }
        }
    })
}

function verificaPecaTem(event){
    if(event != ""){
        return false;
    } else{
        return true;
    }
}


