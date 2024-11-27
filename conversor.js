import axios from 'axios';

export class Conversor {
    /*
    * @param {*} moedaOrigem -- moeda de origem
    * @param {*} moedaDestino -- moeda de destino
    * @param {*} valor -- valor a ser convertido
    * 
    * Construtor da classe Conversor que gerencia aquele conversar para moedas especificadas
    * Um conversor especificado para EUR e BRL será aquele conversor e assim por diante
    */
    constructor(moedaOrigem, moedaDestino, valor) {
        if (moedaOrigem.length != 3 || moedaDestino.length != 3){
            throw new Error('As moedas devem ser representadas por 3 letras')
        }

        if (moedaOrigem === moedaDestino){
            throw new Error('As moedas de origem e destino não podem ser iguais')
        }

        if (valor <= 0){
            throw new Error('O valor deve ser maior que zero')
        }
        this.moedaOrigem = moedaOrigem;
        this.moedaDestino = moedaDestino;
        this.valor = valor;


    }

    /*
    * Método que realiza a conversão de moedas
    * A URL da API é acessada com os parâmetros de moeda de origem, moeda de destino e valor
    * A resposta é tratada e exibida no console
    * Caso ocorra um erro, ele é tratado e exibido no console
    * 
    * Utiliza-se o método GET do axios para acessar a API
    * Função assíncrona para aguardar a resposta da API e tratá-la corretamente antes de exibir
    */
    async conversor() {
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/14c6474b26a8298de90fa43c/pair/${this.moedaOrigem}/${this.moedaDestino}/${this.valor}`);
            console.log(`${this.moedaOrigem} ${this.obterValor(this.valor)} => ${this.moedaDestino} ${this.obterValor(response.data.conversion_result)}`);
            console.log(`Taxa: ${this.obterTaxa(response.data.conversion_rate)}`);
        } catch (error) {
            if(error.response && error.response.status == 404){
                console.error(`Erro ${error.response.status}: Falha na requisição API, verifique se as moedas de origem e destino existem, além do formato do valor`);
            }
        }
    }
    
    /*
    * Método que transforma o valor para o formato de duas casas decimais desejado
    * @param {*} valor -- valor a ser convertido
    * @returns -- valor formatado com duas casas decimais
    */
    obterValor(valor){
        valor = Number(valor);
        return valor.toFixed(2);
    }

    /*
    * Método que transforma a taxa para o formato de seis casas decimais desejado
    * @param {*} taxa -- taxa a ser convertida
    */
    obterTaxa(taxa){
        return taxa.toFixed(6);
    }

}
