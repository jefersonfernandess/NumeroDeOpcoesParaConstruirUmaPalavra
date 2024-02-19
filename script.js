let contadorDasPalavrasConstruidas = 0
let palavraAlvo = "jeferson";
let palavraAlvoEmArray = palavraAlvo.split("");

let arrayDePalavras = ["je", "jefe", "rson", "rse", "jeferson"];

function iniciarVerificacao() {
    let contador = 0;
    for (let i = 0; i < arrayDePalavras.length; i++) {
        let palavraAtualDoLoop = arrayDePalavras[i];

        for (let j = 0; j < arrayDePalavras.length; j++) {
            let palavraDaVez = juntarDuasPalavras(arrayDePalavras[i], arrayDePalavras[j]);
            if (palavraAlvo == palavraDaVez) {
                contadorDasPalavrasConstruidas += 1;
                console.log(`A palavra ${palavraDaVez} é igual a palavra ${palavraAlvo}`);
                console.log(palavraDaVez.length);
                console.log(palavraAtualDoLoop.length);
                console.log("====================================================");

            }
            else {
                console.log(`A palavra ${palavraDaVez} não é igual a palavra ${palavraAlvo}`);
                console.log(palavraDaVez.length);
                console.log(palavraAtualDoLoop.length);
                console.log("====================================================");
            }
            contador += 1
        }

    }
    console.log(`TOTAL: ${contadorDasPalavrasConstruidas}`);
    console.log(`TOTAL DE TENTATIVAS: ${contador}`);
}

function juntarDuasPalavras(palavraUm, palavraDois) {
    return palavraUm + palavraDois
}

iniciarVerificacao();