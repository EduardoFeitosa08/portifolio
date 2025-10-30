'use strict'

const btnRick = document.getElementById('btn_rick')
const btnRickWiki = document.getElementById('btn_rick_wiki')
const btnEstados = document.getElementById('btn_estados')

btnRick.addEventListener('click', function(){
    let url = 'https://github.com/EduardoFeitosa08/Rick-and-Morty-Wiki'
    window.open(url)
})

btnRickWiki.addEventListener('click', function(){
    let url = 'https://eduardofeitosa08.github.io/Rick-and-Morty-Wiki/'
    window.open(url)
})

btnEstados.addEventListener('click', function(){
    let url = 'https://github.com/EduardoFeitosa08/PBack---Aula-8-e-Atividade-3'
    window.open(url)
})