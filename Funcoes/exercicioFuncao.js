
let precoEtiqueta = 100;
// let condicaoPagamento = 'Á vista no dinheiro o PIX';


function verificaCondicaoPagamento(condicaoPagamento) {

    if (condicaoPagamento === 'Á vista no débito') {
        precoEtiqueta = precoEtiqueta / 100 * 90
        return (precoEtiqueta)

    } 
    
    else if (condicaoPagamento === 'Á vista no dinheiro ou PIX') {
        precoEtiqueta = precoEtiqueta / 100 * 85
        return (precoEtiqueta)
    } 
    
    else if (condicaoPagamento === 'Em duas vezes') {
        return precoEtiqueta
    } 
    
    else {
        const jurosDezPorcento = precoEtiqueta / 100 * 10

        return (precoEtiqueta + jurosDezPorcento)
    }
}

console.log(verificaCondicaoPagamento('Á vista no dinheiro ou PIX'))

