// Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

nomes = ['joao', 'roberta', 'aline', 'rodrigo', 'rodolfo', 'parinpromo']

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0] === 'r') {
        console.log(nomes[i])
    }
}