const{
    deepEqual,//Validar True ou False
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () => {
    before(async () =>{
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    }) 
    it('deve pesquisar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        //const posicaoUm = resultado[0]
        deepEqual(resultado, expected)

    })

   
    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected)//Quando eu cadastrar um item ele tem que ser igual ao esperado

    })
<<<<<<< HEAD
    it('Deve remover um heroi por id', async()=>{
        
    })
=======
>>>>>>> 4f83831a42ef9156de7f272192057401695e72a3
   
})