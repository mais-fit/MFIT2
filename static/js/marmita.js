atualizaIconeCarrinho()
const btnEnviaCarrinho = document.getElementById("envia-carrinho")
const controles = document.querySelectorAll("[data-controle]")
const qtdMax = document.getElementById("qtd-marmitas")
const inputQtdMarEscolhida = document.getElementById("qtd-escolhida")
const kitId = document.getElementById("kit_id").value
let qtdAtual = 0

btnEnviaCarrinho.disabled = true;

let kit = JSON.parse(localStorage.getItem('kit')) || undefined

// devemos validar se o kit não está indefinido
let produto = {
    "kit": kit,
    "marmitas": []
}


// adiciona ações ao evento click dos botões de controle
controles.forEach(ctrl => {
    ctrl.onclick = evento => {
        const operacao = evento.target.dataset.controle
        const controle = evento.target.parentNode
        manipulaDados(operacao, controle)
    }
});


// esta função deve manipular a quantidade das marmitas conforme o click nos
// botões de controle
function manipulaDados(operacao, controle){
    // devo pegar o id do kit também
    // devo pegar o id da marmita para por no objeto produto
    const contador = controle.querySelector("[data-contador]")
    const marmitaId = controle.querySelector("#marmita_id").value

    // lógica para adicionar/remover marmita no contador
    if(operacao === "-"){
        contador.value = parseInt(contador.value) -1;
        removeMarmitaNoProduto(produto, marmitaId)
        btnEnviaCarrinho.disabled = true;
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
        adicionaMarmitaNoProduto(produto, marmitaId)
    }
    // habilita botão de envio para o carrinho
    if (qtdAtual === parseInt(qtdMax.value)){
        btnEnviaCarrinho.disabled = false;
    }
}


// verifica se a marmita está em produto
function verificaMarmitaEmProduto(produto, marmitaId){
    // retorna se marmita existe em produto
    let marmita = produto.marmitas.filter((marmita)=>{
        return (marmita.marmita_id === marmitaId)
    });
    return marmita
}


// adiciona marmita no produto
function adicionaMarmitaNoProduto(produto, marmitaId){
    // se a marmita existir vai apenas adicionar mais 1 a quantidade
    // se a marmita não existir criará o objeto marmita na lista
    let marmita = verificaMarmitaEmProduto(produto, marmitaId)

    if (marmita.length == 0) {
        // cria marmita no produto adicionando à lista de marmitas
        const marmita = {"marmita_id": marmitaId, "qtd_marmita": 1}
        produto.marmitas.push(marmita)
    }else {
        produto.marmitas.forEach((marmita)=>{
            if (marmita.marmita_id === marmitaId){
                marmita.qtd_marmita +=1
            }
        })
    }
}


function removeMarmitaNoProduto(produto, marmitaId){
    // se marmita existir retira 1 da quantidade
    // se a quantidade zerar deve apagar o objeto marmita da lista
    // se a marmita não existir não faz nada
    let marmita = verificaMarmitaEmProduto(produto, marmitaId)
    if (marmita.length > 0){
        produto.marmitas.forEach((marmita)=>{
            if (marmita.marmita_id === marmitaId){
                marmita.qtd_marmita -=1
                if(marmita.qtd_marmita == 0){
                    let novaListaMarmitas = produto.marmitas.filter((marmita)=>{
                        return (marmita.qtd_marmita != 0)
                    });
                    produto.marmitas = novaListaMarmitas
                }
            }
        })
    }
}


// só pode ser habilitado quando qtdAtual == a qtdMax
// essa função vai colocar no localStorage os produtos
btnEnviaCarrinho.onclick = () => {
    // verificar se já existe a key produtos no localStorage
    // se a key não existir, criar uma lista de produtos e anexar nela
    // o produto criado. Após, setar a lista de produtos no localStorage
    let produtos = JSON.parse(localStorage.getItem('produtos')) || []
    produtos.push(produto)

    let produtosStr = JSON.stringify(produtos)
    localStorage.setItem("produtos", produtosStr)
    localStorage.setItem("kit", "")

    const qtdProdutos = document.getElementById("qtdProd")
    qtdProdutos.textContent = produtos.length

    window.location = "/carrinho"
}
