/*
0- obter um usuario
1-Preciso obter o numero de telefone de um usuario apartir de seu id
2- obter endereço do usuario pelo id
*/
//Importamos o modulo interno do node.js
const util = require('util')
//Converter callback para promisse
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    //quando der algum problema -> reject(ERRO)
    //quando sucess -> resolve
    return new Promise(function resolvePromise(resolve, reject) {        
        setTimeout(function () {
            //return reject(new Error('Erro nivel SAM'))

            return resolve({
                id: 1,
                nome: 'PeterW',
                dataNascimento: new Date()
            })       
        }, 1000)

    })
    
}

function obterTelefone(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){        
        setTimeout(function (){
            return resolve({
                telefone: '36420865',
                ddd: 11
            })        
        }, 2000)

    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(() =>{
        return callback(null,{            
            rua: 'Alameda dos memes',
            numero: '23' 
        })        
    },2000)

    
}

const usuarioPromise = obterUsuario()
//para manipular o sucesso usamos função .then 
//para manipular erros usamos .catch

usuarioPromise
    .then(function (usuario){//Nomear oque veio de usuarioPromise como usuario
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone: result
            }
        })
    })
    .then(function (resultado){
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function(resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
        
    })
    .catch(function(error){
        console.log('Deu erro', error)
    })