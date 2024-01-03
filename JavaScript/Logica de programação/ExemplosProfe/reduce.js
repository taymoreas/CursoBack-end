// var numeros = [13, 2];
// var total = numeros.reduce(function(total, numero){
// return total + numero;
// } )
// console.log(total);
// /*
// Resultado: 22
// */

// var total = 0;
// var numeros = [1, 1, 3, 4, 5, 7];
// for ( var i = 0; i < numeros.length; i++ ){
//  total += numeros[i];
// }
// console.log(total);

const notas = [1, 5, 8, 3, 7, 10, 9, 4];
let media = notas.reduce((soma, nota) => soma += nota, 0) / notas.length;

console.log(media.toFixed(2));