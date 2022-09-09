// criar um json com o id do kit, ids das marmitas e qtds para por num COOKIE



// var produtos = [
//     {
//         "kit": 1,
//         "marmitas": [
//             {"marmita_id": 1, "qtd_marmita": 5},
//             {"marmita_id": 2, "qtd_marmita": 5}
//         ]
//     },
//     {
//         "kit": 2,
//         "marmitas": [
//             {"marmita_id": 1, "qtd_marmita": 5},
//             {"marmita_id": 2, "qtd_marmita": 10}
//         ]
//     }
// ]


// var produto = {
//     "kit": 2,
//     "marmitas": [
//         {"marmita_id": 1, "qtd_marmita": 5},
//         {"marmita_id": 2, "qtd_marmita": 10}
//     ]
// }



// o botão enviar para o carrinho pega o produto e coloca em um Cookie
// também redireciona para a index. O carrinho deve reconhecer que há um cookie
// e atualizar a quantidade de itens

const btnEnviaCarrinho = document.getElementById("envia-carrinho")
const controles = document.querySelectorAll("[data-controle]")
const qtdMax = document.getElementById("qtd-marmitas")
const inputQtdMarEscolhida = document.getElementById("qtd-escolhida")
const kitId = document.getElementById("kit_id").value
let qtdAtual = 0

// será transformado em cookie
// é a lista de produtos que estará no carrinho
let produtos = []
// é o produto a ser anexado na lista
// caso já exista o cookie produtos, pegamos o cookie produutos, anexamos o
// produto novo apagamos o cookie produtos do browse e setamos ele novamente
// com o novo produto
let produto = {}

controles.forEach(ctrl => {
    ctrl.onclick = evento => {
        const operacao = evento.target.dataset.controle
        const controle = evento.target.parentNode
        manipulaDados(operacao, controle)
    }
});


function manipulaDados(operacao, controle){
    // devo pegar o id do kit também
    // devo pegar o id da marmita para por no objeto produto
    const contador = controle.querySelector("[data-contador]")
    const marmitaId = controle.querySelector("#marmita_id").value


    if(operacao === "-"){
        contador.value = parseInt(contador.value) -1;
        if(parseInt(contador.value) < 0) {
            contador.value = "0"

        } else {
            qtdAtual -= 1
            inputQtdMarEscolhida.value = qtdAtual

        }
    } else if (qtdAtual < qtdMax.value) {
        contador.value = parseInt(contador.value) + 1;
        qtdAtual += 1
        inputQtdMarEscolhida.value = qtdAtual

    }
}
// verifica se a marmita está em produto
function verificaMarmitaEmProduto(produto, marmitaId){
    // retorna se marmita existe em produto
}

// adiciona marmita no produto
function addMarmitaNoProduto(produto, marmitaId){
    // se a marmita existir vai apenas adicionar mais 1 a quantidade
    // se a marmita não existir criará o objeto marmita na lista
}

function removeMarmitaNoProduto(produto, marmitaId){
    // se marmita existir retira 1 da quantidade
    // se a quantidade zerar deve apagar o objeto marmita da lista
    // se a marmita não existir não faz nada
}
// exemplo de produto
// var produto = {
//     "kit": 2,
//     "marmitas": [
//         {"marmita_id": 1, "qtd_marmita": 5},
//         {"marmita_id": 2, "qtd_marmita": 10}
//     ]
// }


// btnEnviaCarrinho.onclick = () => {

//     // só deve gravar o cookie se tudo estiver certo
//     // - o objeto produto deve ter o kit e as marmitas com suas quantidades


//     // setCookie(produtos)
//     // cookie = JSON.parse(getCookie("produtos"))
//     // console.log(cookie)
// }


function getCookie(name){
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");

    for(let i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)==' ') c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setCookie(name){
    if (document.cookie.indexOf("produtos") < 0){
        console.log("criando cookie");
        document.cookie="produtos="+JSON.stringify(name)
    }
}
