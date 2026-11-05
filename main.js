// 1 Passo - Capturar o formulario html

const formulario = document.getElementById("formulario")

// 2 Passo - Adiciona um evento ao formulario

formulario.addEventListener("submit", function(event) {

    //impede que a página seja recarregada automaticamente
    event.preventDefault()

    // 3 Passo - Captura valores digitados pelo usuario

    //captura do nome
    let nome = document.getElementById("nome").value

    //captura da nacionalidade
    let nacionalidade = document.getElementById("nacionalidade").value

    //captura do telefone
    let telefone = document.getElementById("telefone").value

    //captura do estilo(de luta)
    let estilo = document.getElementById("estilo").value

    //captura da mensagem
    let mensagem = document.getElementById("mensagem").value

    if (telefone.trim() === ""){
        alert("Digite seu telefone")

        //interrompe a execução do código
        return
    }

    // 4 Passo - Montar a mensagem que será enviada para o whatsapp

    const textoWhatsapp = `
    Olá! Gostaria de enviar meu perfil para ser selecionado para o torneio de lutadores do coliseu
    Nome:${nome}
    Nacionalidade${nacionalidade}
    Telefone${telefone}
    Estilo de luta${estilo}
    Observações${mensagem}
    `

    let mensagemCodificada = encodeURIComponent(textoWhatsapp)

    let numeroWhatsapp = "5511992223066"

    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada

    window.location.href = link
})