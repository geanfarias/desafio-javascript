/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
function invertWord(str) {
  return (str === '') ? '' : invertWord(str.substr(1)) + str.charAt(0);
}
exports.invertWord = invertWord;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: ana;
    - Deve retornar true se a palavra for um palindromo;
    - Deve desconsiderar se a letra é maiuscula ou minuscula.
*/
function isPalindrome(word){
    if (word.toLowerCase().replace(/\s/g, '') == invertWord(word).replace(/\s/g, '')) {
        return true;
      }
      else {
        return false;
      }
}
exports.isPalindrome = isPalindrome

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
function fruits(arrayFruits){
    arrayFruits.push('kiwi');
    arrayFruits.shift();
    arrayFruits.unshift('goiaba');
    return arrayFruits;
}
exports.fruits = fruits;