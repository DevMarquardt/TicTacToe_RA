let elements = document.getElementsByClassName("quadrado");

let count = 0;

for(let element of elements){
    element.addEventListener("click",  event => {
        let temPeca = verificaPecaTem(element);
        if(temPeca){
            if(count % 2 == 0){
                event.target.innerHTML += '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>';
            } else{
                event.target.innerHTML += '<a-box color="blue"  width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>';
            }
            count ++ ;
            verificaVitoria()
        }
    })
}

function verificaPecaTem(element){
    if(element.innerHTML != ""){
        return false;
    } else{
        return true;
    }
}

function verificaVitoria(){

    let naoEmpate = false
    alert(`
        0 - ${elements[0].innerHTML.includes('green')}
        3 - ${elements[3].innerHTML.includes('green')}
        6 - ${elements[6].innerHTML.includes('green')}
    `)
    if(`${elements[0].innerHTML.includes('green')}`  
        && `${elements[3].innerHTML.includes('green')}`
        && `${elements[6].innerHTML.includes('green')}`){

        alert('vitoria')
    }

    elements.forEach(element => {
        if(element.innerHTML === ""){
            naoEmpate = true
        }
    });
    if(naoEmpate === false){
        alert('Empate')
        windows.location.reload()
    }
}




