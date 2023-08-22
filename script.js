let elements = document.getElementsByClassName("quadrado");

let count = 0;

for(let element of elements){
    element.addEventListener("click", event => {
        count ++ ;
        let temPeca = verificaPecaTem(event.target.innerHTML);
        if(temPeca){
            if(count % 2 == 0){
                event.target.innerHTML += '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>';
            } else{
                event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>';
            }
            verificaVitoria()
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

function verificaVitoria(){
    let mapa = elements
    for(var element of mapa){
        if(element.innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
            element = 1
        }else if(element.innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
            element = 2
        }else{
            element = 0
        }
    }

    verificaVitoriaPT2(mapa)
    
}


function verificaVitoriaPT2(mapa){
    if(mapa[0] == 1 && mapa[1] == 1 && mapa[2] == 1){
        alert('vitoria')
    }
}

