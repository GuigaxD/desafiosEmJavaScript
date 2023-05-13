
// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;


const precoGasolina = 5.79;
const precoEtanol = 3.71
let gastoMédioDoCarro = 10;
let distanciaDaViagem = 100;
let tipoCombustível = "etanl";

if (tipoCombustível == 'etanol') {
    resultado = distanciaDaViagem / gastoMédioDoCarro * precoEtanol

    console.log(resultado)
}

else {
    resultado = distanciaDaViagem / gastoMédioDoCarro * precoGasolina

    console.log(resultado)
}

/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 12;
const nota2 = 15;
const nota3 = 12;


media = (nota1 + nota2 + nota3) / 3;

console.log(media)

if (media < 5) {
    console.log("reprovado")
} else if (media >= 5 && media <= 7) {
    console.log('vai pra recuperação')
} else {
    console.log('passou de ano')
}

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 95;
const altura = 1.95;

const imc = peso / (altura * altura)

console.log(parseInt(imc))

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso Normal')
} else if (imc > 25 && imc < 30) {
    console.log('Acima do peso')
} else if (imc > 30 && imc < 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave')
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


let precoEtiqueta = 100;
let condicaoPagamento = 'Á vista no dinheiro o PIX';


if (condicaoPagamento === 'Á vista no débito') {
    precoEtiqueta = precoEtiqueta / 100 * 90
    console.log(precoEtiqueta)

} else if (condicaoPagamento === 'Á vista no dinheiro ou PIX') {
    precoEtiqueta = precoEtiqueta / 100 * 85
    console.log(precoEtiqueta)
} else if (condicaoPagamento === 'Em duas vezes') {
    console.log(precoEtiqueta)
} else{
    const jurosDezPorcento = precoEtiqueta / 100 * 10

    console.log(precoEtiqueta + jurosDezPorcento)
}
