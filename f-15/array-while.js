let num = [2, 1, 3, 5, 4]
num.sort()
console.log(num)
// for (pos = 0; pos < num.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for (let i in num) {
  console.log(`A posição ${i} tem o valor ${num[i]}`)
}

let pos = num.indexOf(6)
if (pos == -1) {
  console.log(`O valor não foi encontrado.`)
} else {
  console.log(`O valor está na posição ${pos}`)
}