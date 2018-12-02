const EventEmitter = require('events')

class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:Click'
meuEmissor.on(nomeEvento, function(click){
    console.log('Um usuario clicou: ',click)
})

meuEmissor.emit(nomeEvento, 'barra de rolagem')
meuEmissor.emit(nomeEvento, 'imagem 1')


let count = 0
setInterval(function() {
    meuEmissor.emit(nomeEvento, 'no ok' + (count++))
}, 1000)