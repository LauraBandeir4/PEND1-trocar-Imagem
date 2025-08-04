'use strict'

const botaoTrocarImg = document.getElementById('trocar-img')


function trocarImagem() {
    const img = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--bg-image', `url('./img/${serie}.jpeg)')`)
}

botaoTrocarImg.addEventListener('click', trocarImagem)