import promptSync from 'prompt-sync';
const readline = promptSync();

import { Conversor } from "./conversor.js"

while (1) {
    try {
        let moedaOrigem = readline('Digite a moeda de origem: ').toUpperCase();
        let moedaDestino = readline('Digite a moeda de destino: ').toUpperCase();
        let valor = readline('Digite o valor: ');

        const conversor = new Conversor(moedaOrigem, moedaDestino, valor);
        await conversor.conversor();
        console.log('Fim');
        let i = readline('Deseja realizar outra conversão? (s/n): ').toLowerCase();
        if (i == 'n') {
            break;
        }
    }
    catch (error) {
        console.log('Erro: ' + error.message);
    }
}




