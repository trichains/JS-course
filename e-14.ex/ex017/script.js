function gerarTabuada() {
  let num = document.getElementById('numeroInput').value
  let tab = document.getElementById('tab')

  if (num.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${num} x ${c} = ${num*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}