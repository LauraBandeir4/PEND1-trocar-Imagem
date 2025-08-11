'use strict'

const botaoTrocarImagem = document.getElementById('trocar-img')



function trocarImagem() {
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--bg-img', `url('./img/${imagem}.jpg')`)
}

botaoTrocarImagem.addEventListener('click', trocarImagem)