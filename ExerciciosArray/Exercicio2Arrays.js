// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

numeros = [1997, 12, 43, 175, 78, 876,500, 9000, 8, 10, 80, 65, 9, 4, 44, 96, 13, 76, 53, 2]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i]%2 === 0) {
        console.log(numeros[i])
    }
}