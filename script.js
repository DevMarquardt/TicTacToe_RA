AFRAME.registerComponent('brush', {
    init: function () {
      const scene = document.querySelector('a-scene');
      const brush = this.el;
  
      scene.addEventListener('click', function (event) {
        // Crie uma marca de pincel virtual onde o jogador clicou
        const position = event.detail.intersection.point;
        const newBrush = document.createElement('a-sphere');
        newBrush.setAttribute('radius', '0.05');
        newBrush.setAttribute('position', position);
        newBrush.setAttribute('color', 'red');
        scene.appendChild(newBrush);
      });
    }
  });
  