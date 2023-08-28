let elements = document.getElementsByClassName("quadrado");

let count = 0;

for(let element of elements){
    element.addEventListener("click",index,  event => {
        let temPeca = verificaPecaTem(event.target.innerHTML);
        if(temPeca){
            count ++ ;
            if(count % 2 == 0){
                event.target.innerHTML += '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>';
            } else{
                event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>';
            }
            elements[index].innerHTML += event.target.innerHTML;
            verificaVitoria()
        }
        index++;
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

    let naoEmpate = false

    if(elements[0].innerHTML === '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('ooooooooooo')
    }
    else if(elements[0].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[1].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[2].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[0].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[3].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[6].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[0].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[4].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[8].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[2].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[5].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[8].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[3].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[4].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[5].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[6].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[7].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[8].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }
    else if(elements[1].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
     && elements[4].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
      && elements[7].innerHTML == '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'){
        alert('vitoria')
    }

    // ========================================== X ==========================================

    else if(elements[0].innerHTML === '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('ooooooooooo')
    }
    else if(elements[0].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[1].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[2].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[0].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[3].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[6].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[0].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[4].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[8].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[2].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[5].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[8].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[3].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[4].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[5].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[6].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[7].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[8].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }
    else if(elements[1].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
     && elements[4].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
      && elements[7].innerHTML == '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'){
        alert('vitoria')
    }

    elements.forEach(element => {
        if(element.innerHTML === null){
            naoEmpate = true
        }
    });
    if(naoEmpate === false){
        alert('Empate')
        windows.location.reload()
    }
}




