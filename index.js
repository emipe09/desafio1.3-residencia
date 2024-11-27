import promptSync from 'prompt-sync';
const readline = promptSync();

import { Conversor } from "./conversor.js"

// Loop para realizar conversões até que o usuário decida parar
console.log('\nPara sair, apenas pressione ENTER sem digitar nada no campo da moeda de origem\n') ;

while (1) {
    try {
        let moedaOrigem = readline('Digite a moeda de origem: ').toUpperCase();
        if(moedaOrigem == ""){
            break;
        }
        let moedaDestino = readline('Digite a moeda de destino: ').toUpperCase();
        let valor = readline('Digite o valor: ');

        const conversor = new Conversor(moedaOrigem, moedaDestino, valor);
        await conversor.conversor();
    }
    catch (error) {
        console.error(error.message);
    }
}




