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

    if( elements[0].innerHTML.includes('green')
        &&  elements[3].innerHTML.includes('green')
        &&  elements[6].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[0].innerHTML.includes('green')
        &&  elements[1].innerHTML.includes('green')
        &&  elements[2].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[0].innerHTML.includes('green')
        &&  elements[4].innerHTML.includes('green')
        &&  elements[8].innerHTML.includes('green')){

        alert('Vitória para o verde')

        setTimeout(() => {
            window.location.reload();
        }, 1000);

    }

    if( elements[2].innerHTML.includes('green')
        &&  elements[5].innerHTML.includes('green')
        &&  elements[8].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[2].innerHTML.includes('green')
        &&  elements[4].innerHTML.includes('green')
        &&  elements[6].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[3].innerHTML.includes('green')
        &&  elements[4].innerHTML.includes('green')
        &&  elements[5].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[6].innerHTML.includes('green')
        &&  elements[7].innerHTML.includes('green')
        &&  elements[8].innerHTML.includes('green')){
            
            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }

    if( elements[1].innerHTML.includes('green')
        &&  elements[4].innerHTML.includes('green')
        &&  elements[7].innerHTML.includes('green')){

            alert('Vitória para o verde')

            setTimeout(() => {
                window.location.reload();
            }, 1000);
    

    }






    if( elements[0].innerHTML.includes('blue')
        &&  elements[3].innerHTML.includes('blue')
        &&  elements[6].innerHTML.includes('blue')){

        alert('Vitória para o azul')
        windows.location.reload()

    }

    if( elements[0].innerHTML.includes('blue')
        &&  elements[1].innerHTML.includes('blue')
        &&  elements[2].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

        windows.location.reload()

    }

    if( elements[0].innerHTML.includes('blue')
        &&  elements[4].innerHTML.includes('blue')
        &&  elements[8].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

    }

    if( elements[2].innerHTML.includes('blue')
        &&  elements[5].innerHTML.includes('blue')
        &&  elements[8].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

    }

    if( elements[2].innerHTML.includes('blue')
        &&  elements[4].innerHTML.includes('blue')
        &&  elements[6].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

    }

    if( elements[3].innerHTML.includes('blue')
        &&  elements[4].innerHTML.includes('blue')
        &&  elements[5].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

    }

    if( elements[6].innerHTML.includes('blue')
        &&  elements[7].innerHTML.includes('blue')
        &&  elements[8].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

    }

    if( elements[1].innerHTML.includes('blue')
        &&  elements[4].innerHTML.includes('blue')
        &&  elements[7].innerHTML.includes('blue')){

        alert('vitoria')
        windows.location.reload()

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




