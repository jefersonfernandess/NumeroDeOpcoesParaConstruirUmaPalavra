let contador = 0;
let contadorDasPalavrasConstruidas = 0
let palavraAlvo = "jeferson";
//let arrayDeLetras = ["o", "l", "a"]
let arrayDeLetras = ["j", "e", "f", "e", "r", "s", "o", "n"]
let arrayDePalavrasFormadas = [];

function iniciarVerificacaoLetras() {
    let palavraDoFormarPalavra = "";
    while (palavraAlvo != palavraDoFormarPalavra) {
        palavraDoFormarPalavra = formarPalavra()
        if (arrayDePalavrasFormadas.includes(palavraDoFormarPalavra)) {
            if (palavraAlvo == palavraDoFormarPalavra) {
                contadorDasPalavrasConstruidas += 1;
                console.log("============================================================");
                console.log(`A palavra ${palavraDoFormarPalavra} é igual a palavra ${palavraAlvo}`);
                console.log("============================================================");
            }
            else {
                console.log("============================================================");
                console.log(`A palavra ${palavraDoFormarPalavra} não é igual a palavra ${palavraAlvo}`);
                console.log("============================================================");

            }
        }
        contador += 1
    }
    console.log(`TOTAL: ${contadorDasPalavrasConstruidas}`);
    console.log(`TOTAL DE TENTATIVAS: ${contador}`);
    console.log(arrayDePalavrasFormadas);
}

function gerarLetraAleatoria() {
    return Math.floor(Math.random() * 8);
}

function formarPalavra() {
    let palavra = "";

    for (let k = 0; k < arrayDeLetras.length; k++) {
        let letraAtualDoLoop = arrayDeLetras[gerarLetraAleatoria()];
        palavra = palavra + letraAtualDoLoop;
    }

    if (arrayDePalavrasFormadas.includes(palavra) == false) {
        arrayDePalavrasFormadas.push(palavra);
    }

    return palavra;

}

// let contador = 0;
// let contadorDasPalavrasConstruidas = 0
// let palavraAlvo = "jeferson";
// //let arrayDeLetras = ["o", "l", "a"]
// let arrayDeLetras = ["j", "e", "f", "e", "r", "s", "o", "n"]
// let arrayDePalavrasFormadas = [];
// const maxTentativas = 100000;


// function iniciarVerificacaoLetras() {
//     let palavraDoFormarPalavra = "";
//     let contador = 0;
//     while (palavraAlvo != palavraDoFormarPalavra && contador < maxTentativas) {
//         palavraDoFormarPalavra = formarPalavra()
//         if (arrayDePalavrasFormadas.includes(palavraDoFormarPalavra)) {
//             if (palavraAlvo == palavraDoFormarPalavra) {
//                 contadorDasPalavrasConstruidas += 1;
//                 console.log(`A palavra ${palavraDoFormarPalavra} é igual a palavra ${palavraAlvo}`);
//                 console.log("====================================================");
//             }
//             else {

//                 console.log(`A palavra ${palavraDoFormarPalavra} não é igual a palavra ${palavraAlvo}`);
//                 console.log("====================================================");
//             }
//         }
//         contador += 1
//     }
//     console.log(arrayDePalavrasFormadas);
//     console.log(`TOTAL: ${contadorDasPalavrasConstruidas}`);
//     console.log(`TOTAL DE TENTATIVAS: ${contador}`);
// }

// function gerarLetraAleatoria() {
//     return Math.floor(Math.random() * 8);
// }

// function formarPalavra() {
//     let palavra = "";

//     for (let k = 0; k < arrayDeLetras.length; k++) {
//         let letraAtualDoLoop = arrayDeLetras[gerarLetraAleatoria()];
//         palavra = palavra + letraAtualDoLoop;
//     }

//     if (arrayDePalavrasFormadas.includes(palavra) == false) {
//         arrayDePalavrasFormadas.push(palavra);
//     }

//     return palavra;

// }

iniciarVerificacaoLetras();


// iniciarVerificacaoLetras();