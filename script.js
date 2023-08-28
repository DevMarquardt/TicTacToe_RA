let elements = document.getElementsByClassName("quadrado");
let count = 0;

for (let element of elements) {
  element.addEventListener("click", event => {
    let temPeca = verificaPecaTem(event.target.innerHTML);
    if (temPeca) {
      count++;
      if (count % 2 === 0) {
        event.target.innerHTML += '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>';
      } else {
        event.target.innerHTML += '<a-box color="blue" width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>';
      }
      verificaVitoria();
    }
  });
}

function verificaPecaTem(content) {
  return content === "";
}

function verificaVitoria() {
  if (
    elements[0].innerHTML === '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>' &&
    elements[1].innerHTML === '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>' &&
    elements[2].innerHTML === '<a-circle color="green" radius="0.1" position="0 0 0.6"></a-circle>'
  ) {
    alert('Player 1 wins');
  } else if (
    elements[0].innerHTML === '<a-box color="blue" width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>' &&
    elements[1].innerHTML === '<a-box color="blue" width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>' &&
    elements[2].innerHTML === '<a-box color="blue" width="0.09" height="0.2" position="0 0 0.08" radius="20"></a-box>'
  ) {
    alert('Player 2 wins');
  }
}