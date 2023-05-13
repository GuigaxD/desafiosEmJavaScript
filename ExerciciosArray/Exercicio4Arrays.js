// Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

numeros = []

for (let i = 0; i < 51; i++) {
    if (i % 2 === 0 && i >= 10 && i <= 50) {
        numeros.push(i)
        
    }
}

console.log(numeros)