// Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]

notas = [2, 7, 3, 8, 10, 4]

for (let i = 0; i < notas.length; i++) {
    const maiorNumero = Math.max(...notas)

    if (notas[i] === maiorNumero) {
        console.log(maiorNumero)
    }
    
}