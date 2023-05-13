// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastoPercurso(kilometros, precoCombustivel) {
        return kilometros * this.gastoMedio * precoCombustivel;
    }
}

const corsa = new Carro('Chevroelt', 'Vermelho', 1/12);

console.log(corsa.gastoPercurso(70, 5));