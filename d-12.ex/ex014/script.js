function carregar() {
  var msg = document.querySelector('#msg');
  var img = document.querySelector('#img');
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();

  // Adiciona um "0" antes do minuto, se for menor que 10
  if (min < 10) {
    min = min.toString().padStart(2, '0');
  }

  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    msg.innerHTML = `Bom dia! Agora são ${hora}:${min}.`;
    img.src = 'imagens/manha.jpg';
    document.body.style.background = '#6289AB';
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
    msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}.`;
    img.src = 'imagens/tarde.jpg';
    document.body.style.background = '#B17D7D';
  } else {
    // BOA NOITE!
    msg.innerHTML = `Boa noite! Agora são ${hora}:${min}.`;
    img.src = 'imagens/noite.jpg';
    document.body.style.background = '#2C2032';
  }

  // Adiciona uma transição de 2 segundos no CSS
  document.body.style.transitionDuration = '2s';
}
