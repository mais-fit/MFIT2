function atualizaIconeCarrinho(){
    const qtdProdutos = document.getElementById("qtdProd")
    let produtos = JSON.parse(localStorage.getItem('produtos')) || []
    qtdProdutos.textContent = produtos.length
    return produtos
}
