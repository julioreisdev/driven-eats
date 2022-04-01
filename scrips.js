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

function verificaTotalEscolhas() {
  let escolhasConcluidas = document.querySelectorAll(".selecionado").length === 3?true:false
  if (escolhasConcluidas) {
    let botao = document.querySelector("footer button")
    botao.innerHTML = "Fechar pedido"
    botao.classList.add("botao-ativo")
  }
}