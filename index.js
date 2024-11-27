import promptSync from 'prompt-sync';
const readline = promptSync();

import { Conversor } from "./conversor.js"

// Loop para realizar conversões até que o usuário decida parar
let continuar = true;
while (continuar) {
    try {
        let moedaOrigem = readline('Digite a moeda de origem: ').toUpperCase();
        let moedaDestino = readline('Digite a moeda de destino: ').toUpperCase();
        let valor = readline('Digite o valor: ');

        const conversor = new Conversor(moedaOrigem, moedaDestino, valor);
        await conversor.conversor();
        let i = readline('Deseja realizar outra conversão? (s/n)').toLowerCase();
        if (i == 'n') {
            continuar = false;
        }
        else if (i != 's') {
            throw new Error('Resposta inválida, continuando operação');
        }

    }
    catch (error) {
        console.error(error.message);
    }
}




