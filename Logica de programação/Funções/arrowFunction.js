
// Função notas
const notas = [7,8,9]
let media = notas.reduce((soma, nota) => soma + nota, 0)/notas.length;
console.log(media);

//Função maior igual
let maiorIgual = (n1, n2) => { n1 >= n2 ? console.log("certo meo!") : console.log("Não ta certo meo!")
   return n1;
   
}
console.log(maiorIgual(2, 3))
