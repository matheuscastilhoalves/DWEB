let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let produto = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

alert(
    "Resultados das operações:\n\n" +
    "Soma: " + soma + "\n" +
    "Subtração (1º pelo 2º): " + subtracao + "\n" +
    "Produto: " + produto + "\n" +
    "Divisão (1º pelo 2º): " + divisao + "\n" +
    "Resto da divisão (1º pelo 2º): " + resto
);