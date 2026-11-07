
function escolhaComputador() {
    let numero = Math.floor(Math.random() * 3);

    if (numero == 0) {
        return "pedra";
    } else if (numero == 1) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function verificarVencedor(jogador, computador) {
    if (jogador == computador) {
        return "Empate!";
    }

    if (jogador == "pedra") {
        if (computador == "tesoura") {
            return "Você venceu!";
        } else {
            return "Computador venceu!";
        }
    } else if (jogador == "papel") {
        if (computador == "pedra") {
            return "Você venceu!";
        } else {
            return "Computador venceu!";
        }
    } else if (jogador == "tesoura") {
        if (computador == "papel") {
            return "Você venceu!";
        } else {
            return "Computador venceu!";
        }
    }
}

function mostrarResultado(jogador, computador, resultado) {
    document.getElementById("jogador").innerHTML =
        "Você escolheu: " + jogador;

    document.getElementById("computador").innerHTML =
        "Computador escolheu: " + computador;

    document.getElementById("resultado").innerHTML = resultado;
}

function jogar(jogador) {
    let computador = escolhaComputador();

    let resultado = verificarVencedor(jogador, computador);

    mostrarResultado(jogador, computador, resultado);
}