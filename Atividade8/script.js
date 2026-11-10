
let quantidade = 0;
let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = 0;

let pessimo = 0;
let otimo = 0;
let bom = 0;

let feminino = 0;
let masculino = 0;
let outros = 0;

document.querySelector("#cadastrar").onclick = () => {
    let idade = Number(document.querySelector("#idade").value);
    let sexo = document.querySelector("#sexo").value;
    let opiniao = Number(document.querySelector("#opiniao").value);

    if (quantidade >= 45) {
        document.querySelector("#mensagem").innerHTML = "Limite de 45 pessoas atingido!";
    } else if (idade <= 0 || idade > 120 || sexo == "" || opiniao == 0) {
        document.querySelector("#mensagem").innerHTML = "Preencha todos os campos!";
    } else {
        quantidade++;
        somaIdades += idade;

        if (quantidade == 1) {
            maiorIdade = idade;
            menorIdade = idade;
        } else {
            if (idade > maiorIdade) {
                maiorIdade = idade;
            }

            if (idade < menorIdade) {
                menorIdade = idade;
            }
        }

        if (opiniao == 1) {
            pessimo++;
        } else if (opiniao == 3) {
            bom++;
        } else if (opiniao == 4) {
            otimo++;
        }

        if (sexo == "feminino") {
            feminino++;
        } else if (sexo == "masculino") {
            masculino++;
        } else if (sexo == "outros") {
            outros++;
        }

        document.querySelector("#mensagem").innerHTML =
            "Pessoa cadastrada: " + quantidade + "/45";

        document.querySelector("#idade").value = "";
        document.querySelector("#sexo").value = "";
        document.querySelector("#opiniao").value = "";
    }
};

document.querySelector("#resultados").onclick = () => {
    if (quantidade == 0) {
        document.querySelector("#resultado").innerHTML =
            "Nenhuma pessoa cadastrada!";
    } else {
        let media = somaIdades / quantidade;
        let porcentagem = ((otimo + bom) / quantidade) * 100;

        document.querySelector("#resultado").innerHTML =
            "<p>Média das idades: " + media.toFixed(2) + "</p>" +
            "<p>Maior idade: " + maiorIdade + "</p>" +
            "<p>Menor idade: " + menorIdade + "</p>" +
            "<p>Respostas péssimo: " + pessimo + "</p>" +
            "<p>Porcentagem de ótimo e bom: " + porcentagem.toFixed(2) + "%</p>" +
            "<p>Mulheres: " + feminino + "</p>" +
            "<p>Homens: " + masculino + "</p>" +
            "<p>Outros: " + outros + "</p>";
    }
};
