let produtos = atualizaIconeCarrinho()

const placeHolder = document.getElementById("placeholder")
const spanValorTotal = document.getElementById("valor-total")

if (totalizaProdutos(produtos) == 0) {
    spanValorTotal.innerText = "0,00"
}else{
    spanValorTotal.innerText = totalizaProdutos(produtos).toString().replace(".", ",")
}

produtos.forEach(produto => {
    renderizaProduto(produto, placeHolder)
});


function excluiKit(ProdutoId){
    let novosProdutos = produtos.filter(produto =>{
        return (produto.produto_id != ProdutoId) 
    })
    localStorage.setItem("produtos", JSON.stringify(novosProdutos))
    location.reload()
}


function totalizaProdutos(produtos){
    let total = 0.00
    produtos.forEach(produto => {
        const qtdKit = produto.kit.qtd
        let valorKit = produto.kit.valor
        valorKit = parseFloat(valorKit.replace(",", "."))
        total += (qtdKit * valorKit)
    })
    return total
}


//cria os elementos html para renderizar cada produto (kit/marmitas) da lista
function renderizaProduto(produto, placeHolder){

    const liPrincipal = document.createElement("li")
    liPrincipal.classList.add("list-group-item", "py-3")

    const divPrincipal = document.createElement("div")
    divPrincipal.classList.add("row", "g-3")

    const primeiraDiv = document.createElement("div")
    primeiraDiv.classList.add("col-4", "col-md-3", "col-lg-2")

    const img = document.createElement("img")
    img.setAttribute("src", `static/img/${produto.kit.link}`)
    img.classList.add("img-thumbnail")

    primeiraDiv.appendChild(img)

    const segundaDiv = document.createElement("div")
    segundaDiv.classList.add("col-8", "col-md-9", "col-lg-7", "col-xl-8", 
                             "text-left", "align-self-center")

    const h4 = document.createElement("h4")
    h4.classList.add("text-danger", "text-decoration-none")
    h4.innerText = produto.kit.descricao

    const h5 = document.createElement("h5")
    h5.innerText = `Escolha seu kit e aproveite suas ${produto.kit.qtdMaxMarmitas} refeições.`

    const ancoraDetalhesKit = document.createElement("a")
    ancoraDetalhesKit.classList.add("text-secondary")
    ancoraDetalhesKit.setAttribute("href", "#")
    ancoraDetalhesKit.innerText = "Detalhes do Kit"

    segundaDiv.appendChild(h4)
    segundaDiv.appendChild(h5)
    segundaDiv.appendChild(ancoraDetalhesKit)


    const terceiraDiv = document.createElement("div")
    terceiraDiv.classList.add("col-6", "offset-6", "col-sm-6", "offset-sm-6", 
                              "col-md-4", "offset-md-8", "col-lg-3", "offset-lg-0", 
                              "col-xl-2", "align-self-center", "mt-3")

    //criar os elementos da terceira div
    const groupBtn = document.createElement("div")
    groupBtn.classList.add("text-end")

    const btnLixeira = document.createElement("button")
    btnLixeira.setAttribute("type", "button")
    btnLixeira.classList.add("btn", "btn-outline-danger", "border-dark", "float-right")
    btnLixeira.onclick = () => {

        excluiKit(produto.produto_id)
    }

    const iconeLixeira = document.createElement("i")
    iconeLixeira.setAttribute("style", "font-size: 16px; line-height: 16px; padding: 30px;")
    iconeLixeira.classList.add("bi-trash")

    btnLixeira.appendChild(iconeLixeira)

    groupBtn.appendChild(btnLixeira)

    const divValor = document.createElement("div")
    divValor.classList.add("text-end", "mt-2")

    const spanValor = document.createElement("span")
    spanValor.classList.add("text-secondary")
    spanValor.innerText = "Valor Kit: R$ " + produto.kit.valor

    divValor.appendChild(spanValor)

    terceiraDiv.appendChild(groupBtn)
    terceiraDiv.appendChild(divValor)

    divPrincipal.appendChild(primeiraDiv)
    divPrincipal.appendChild(segundaDiv)
    divPrincipal.appendChild(terceiraDiv)


    liPrincipal.appendChild(divPrincipal)

    placeHolder.appendChild(liPrincipal)

    totalizaProdutos(produtos)
}
