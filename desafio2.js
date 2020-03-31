/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
function sum(number1, number2){
    return number1 + number2; 
}
exports.sum = sum;

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
fullname = function(name, surname){
    return name + ' ' + surname;
}
exports.fullname = fullname;

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculate(number1, number2, number3){
    if(number1 && number2 && number3){
        return number1 * number2 * number3 + 2;
    }
    else{
        return "Preencha todos os valores corretamente!";
    }
}
exports.calculate = calculate

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/

calculatev2 = function(param1, param2, param3){
    if(param1 && param2 && param3){
        return (param1 + param2)/param3;
    }
    else if(param1 && param2){
        return param1 + param2;
    }
    else if(param1){
        return param1;
    }
    else{
        false;
    }
}

exports.calculatev2 = calculatev2;

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
function isPair(value){
    if(value & 1){
        return false;
    }
    else{
        return true;
    }
}
exports.isPair = isPair;
