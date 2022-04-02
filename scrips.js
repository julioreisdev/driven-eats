/* Selecionando ítens */
function itemSelecionado(itens, iconsCheck) {
  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener("click", function() {
      for (let j = 0; j < itens.length; j++) {
        itens[j].classList.remove("selecionado")
        iconsCheck[j].classList.add('display-none')
      }
      itens[i].classList.add("selecionado")
      iconsCheck[i].classList.remove('display-none')
    })
  }
}

let pratos = document.querySelectorAll(".pratos .item")
let bebidas = document.querySelectorAll(".bebidas .item")
let sobremesas = document.querySelectorAll(".sobremesas .item")

let iconsCheckPratos = document.querySelectorAll(".pratos .item .icone-check")
let iconsCheckBebidas = document.querySelectorAll(".bebidas .item .icone-check")
let iconsCheckSobremesas = document.querySelectorAll(".sobremesas .item .icone-check")

itemSelecionado(pratos, iconsCheckPratos)
itemSelecionado(bebidas, iconsCheckBebidas)
itemSelecionado(sobremesas, iconsCheckSobremesas)

/* Ativa botão 'Fechar pedido' */
function verificaTotalEscolhas() {
  let escolhasConcluidas = document.querySelectorAll(".selecionado").length === 3?true:false
  if (escolhasConcluidas) {
    let botao = document.querySelector("footer button")
    botao.innerHTML = "Fechar pedido"
    botao.classList.add("botao-ativo")
  }
}

/* Pega valor conversível em número e o retorna */
function valorConversivel(string) {
  let numero = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ',') {
      numero += '.'
    }
    else if (string[i] === 'R') {
      numero += ''
    }
    else if (string[i] === '$') {
      numero += ''
    }
    else {
      numero += string[i]
    }
  }
  return Number(numero)
}

function mensagemPedido(preco) {
  let tituloPrato = document.querySelector(".pratos .selecionado h4").innerHTML
  let tituloBebida = document.querySelector(".bebidas .selecionado h4").innerHTML
  let tituloSobremesa = document.querySelector(".sobremesas .selecionado h4").innerHTML

  let texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${tituloPrato}\n- Bebida: ${tituloBebida}\n- Sobremesa: ${tituloSobremesa}\nTotal: R$ ${preco}`
  return texto
}

function valorTotalPedido() {
  let precoPrato = valorConversivel(document.querySelector(".pratos .selecionado .preco").innerHTML)
  let precoBebida = valorConversivel(document.querySelector(".bebidas .selecionado .preco").innerHTML)
  let precoSobremesa = valorConversivel(document.querySelector(".sobremesas .selecionado .preco").innerHTML)
  let precoTotal = (precoPrato+precoBebida+precoSobremesa)
  return precoTotal.toFixed(2)
}

function verificaBotaoAtivo() {
  let botao = document.querySelector("footer button")
  if (botao.classList.contains("botao-ativo")) {
    return true
  }
  return false
}

function opaco() {
  let header = document.querySelector('header')
  let main = document.querySelector('main')
  let footer = document.querySelector('footer')

  header.classList.add("opaco")
  main.classList.add("opaco")
  footer.classList.add("opaco")
}

function mostraPedido() {
  let prato = document.querySelector(".prato")
  let bebida = document.querySelector(".bebida")
  let sobremesa = document.querySelector(".sobremesa")
  let precoPrato = document.querySelector(".preco-prato")
  let precoBebida = document.querySelector(".preco-bebida")
  let precoSobremesa = document.querySelector(".preco-sobremesa")
  let precoTotal = document.querySelector(".preco-total")

  prato.innerHTML += document.querySelector(".pratos .selecionado h4").innerHTML
  bebida.innerHTML += document.querySelector(".bebidas .selecionado h4").innerHTML
  sobremesa.innerHTML += document.querySelector(".sobremesas .selecionado h4").innerHTML

  precoPrato.innerHTML += document.querySelector(".pratos .selecionado .preco").innerHTML
  precoBebida.innerHTML += document.querySelector(".bebidas .selecionado .preco").innerHTML
  precoSobremesa.innerHTML += document.querySelector(".sobremesas .selecionado .preco").innerHTML
  precoTotal.innerHTML += valorTotalPedido()

  let resumoPedido = document.querySelector(".confirmacao-pedido")
  console.log("Estou na area")
  resumoPedido.classList.remove("display-none")
}

function fechaPedido() {
  let precoTotal = valorTotalPedido()
  let mensagemNormal = mensagemPedido(precoTotal)
  let ancora = document.querySelector("footer a")
  let mensagemURI = encodeURIComponent(mensagemNormal)

  if (verificaBotaoAtivo) {
    opaco()
    mostraPedido()
    let botaoConfirma = document.querySelector(".link-confirma")
    botaoConfirma.href = "https://wa.me/5589981043496?text="+mensagemURI
  }
}