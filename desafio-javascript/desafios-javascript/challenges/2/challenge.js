/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

const isPrime = require('../../utils/isPrime')

function sumPrimes(num) {

    if (arguments.length !== 1 || typeof num !== "number") return;
  
    let inicio = 1;
    let soma = 0;
    while (inicio <= num) {

      if (isPrime(inicio)) {
        soma += inicio;
      }
      inicio++;
    }

    return soma;
}

module.exports = sumPrimes

