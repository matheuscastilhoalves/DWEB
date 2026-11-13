function maiorNumero(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

function exercicio1() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);
    let c = Number(document.getElementById("numero3").value);

    let resultado = maiorNumero(a, b, c);

    document.getElementById("resultado1").innerHTML =
        "O maior número é: " + resultado;
}

function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];

    numeros.sort(function(x, y) {
        return x - y;
    });

    return numeros;
}

function exercicio2() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    let resultado = ordemCrescente(a, b, c);

    document.getElementById("resultado2").innerHTML =
        "Ordem crescente: " + resultado.join(", ");
}

function verificarPalindromo(texto) {
    texto = texto.toLowerCase().replace(/\s/g, "");

    let invertido = texto.split("").reverse().join("");

    if (texto === invertido) {
        return "É um palíndromo";
    } else {
        return "Não é um palíndromo";
    }
}

function exercicio3() {
    let palavra = document.getElementById("palavra").value;

    if (palavra.trim() === "") {
        document.getElementById("resultado3").innerHTML =
            "Digite uma palavra ou frase.";
        return;
    }

    let resultado = verificarPalindromo(palavra);

    document.getElementById("resultado3").innerHTML = resultado;
}

function verificarSubconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "É um subconjunto";
    } else {
        return "Não é um subconjunto";
    }
}

function exercicio4() {
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;

    let resultado = verificarSubconjunto(palavra1, palavra2);

    document.getElementById("resultado4").innerHTML = resultado;
}

function diaDaSemana(data) {
    let partes = data.split("-");

    let ano = Number(partes[0]);
    let mes = Number(partes[1]) - 1;
    let dia = Number(partes[2]);

    let dataCompleta = new Date(ano, mes, dia);

    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    return dias[dataCompleta.getDay()];
}

function exercicio5() {
    let data = document.getElementById("data").value;

    if (data === "") {
        document.getElementById("resultado5").innerHTML =
            "Selecione uma data.";
        return;
    }

    let resultado = diaDaSemana(data);

    document.getElementById("resultado5").innerHTML =
        "Dia da semana: " + resultado;
}
