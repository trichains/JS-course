function verificar() {
  var ano = new Date().getFullYear();
  var form_ano = document.querySelector("#ianonasc").value;
  var resContainer = document.querySelector("#res-container");
  var res = document.querySelector("#res");
  var img = document.querySelector("#foto");

  if (form_ano.length === 0 || form_ano > ano) {
    alert("ERRO! Ano de nascimento não encontrado ou inválido.");
  } else {
    var form_sex = document.getElementsByName("sexo");
    var idade = ano - form_ano;
    var genero = "";

    if (form_sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.src = "imgs/h-kid.jpg";
      } else if (idade < 21) {
        // Jovem
        img.src = "imgs/h-jovem.jpg";
      } else if (idade < 50) {
        // Adulto
        img.src = "imgs/h-adulto.jpg";
      } else {
        // Idoso
        img.src = "imgs/h-idoso.jpg";
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.src = "imgs/m-kid.jpg";
      } else if (idade < 21) {
        // Jovem
        img.src = "imgs/m-jovem.jpg";
      } else if (idade < 50) {
        // Adulto
        img.src = "imgs/m-adulta.jpg";
      } else {
        // Idoso
        img.src = "imgs/m-idosa.jpg";
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

    resContainer.classList.remove("hidden");
  }
}
