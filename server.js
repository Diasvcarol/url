const express = require('express')

const app = express()

app.use(express.json())

app.use('/', express.static('public'))

function gerarPalavraAleatoria() {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    const tamanho = 8
    let retorno = ''
    for (let i = 0; i < tamanho; i++) {
        retorno += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length))
    }
    return retorno
}

const bancoDeDados = {}

app.post('/encurtar', (requisicao, resposta) => {
    const dadosURL = requisicao.body
    const palavra = gerarPalavraAleatoria()
    bancoDeDados[palavra] = dadosURL.url
    resposta.json(url, 'http://localhost:3001/' + palavra)
})

app.get('/:palavra', (requisicao, resposta) => {
    const rotaDesejada = requisicao.params.palavra
    resposta.redirect(bancoDeDados[rotaDesejada])
})

app.listen(3001)