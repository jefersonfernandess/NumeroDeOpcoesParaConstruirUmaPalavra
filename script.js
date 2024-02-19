let contadorDasPalavrasConstruidas = 0
let palavraAlvo = "jeferson";
let palavraAlvoEmArray = palavraAlvo.split("");
console.log(palavraAlvoEmArray);

let arrayDePalavras = ["je", "jefe", "rson", "rse", "jeferson"];

function iniciarVerificacao() {

    fazerVerificacaoDasPalavras();

    for(let i = 0; i < arrayDePalavras.length; i++) {
        let palavraAtualFor = arrayDePalavras[i];
        let palavraAtualForEmArray = palavraAtualFor.split("");
        console.log(palavraAtualForEmArray);
        // let verificandoSeEhAPalavra = palavraAtual + arrayDePalavras[i]
        // if(verifcarSeEhAPalavra === palavraAlvo) {
        //     contador += 1
        // }
        // console.log(posicaoArrayDePalavras);
    }
}

function fazerVerificacaoDasPalavras() {
    for(let i = 0; i < arrayDePalavras.length; i++) {
        if(palavraAlvo == arrayDePalavras[i]) {
            console.log(`A palavra na posição ${i} é igual a palavra: ${palavraAlvo}`);
            contadorDasPalavrasConstruidas += 1;
        }
        else {
            console.log(`A palavra na posição ${i} não é igual a palavra: ${palavraAlvo}`);
        }
    }
}

//iniciarVerificacao();