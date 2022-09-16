const botoesEscolher = document.querySelectorAll("[data-escolher]")

botoesEscolher.forEach(btn => {
    btn.onclick = evento => {
        const footerCard = evento.target.parentNode
        const card = footerCard.parentNode
        //montando kit
        let kit = {}
        const kitId = card.dataset.kit
        const descricao = card.querySelector("[data-descricao]").dataset.descricao
        const qtd = footerCard.dataset.qtd
        const valor = card.querySelector("[data-valor]").dataset.valor
        const link = card.querySelector("[data-link]").dataset.link

        kit["id"] = kitId
        kit["descricao"] = descricao
        kit["qtdMax"] = qtd
        kit["valor"] = valor
        kit["link"] = link

        const kitStr = JSON.stringify(kit)

        localStorage.setItem("kit", kitStr)

        window.location = "/marmitas/"+kitId
    }
})