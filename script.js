AFRAME.registerComponent('cell', {
    init: function () {
      const el = this.el;
      el.addEventListener('click', () => this.onClick());
    },
    
    onClick: function () {
      const el = this.el;
      if (!el.innerHTML) {
        el.innerHTML = "X"; // Alternar entre "X" e "O" para os jogadores
      }
    }
  });
  