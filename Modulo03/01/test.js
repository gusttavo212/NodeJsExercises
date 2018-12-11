const assert = require('assert')
const { 
    obterPessoa
    } = require('./serice')

//Instalamos o pacote nock, para simular requisicoes
const nock = require('nock')

describe('Star Wars Test', function(){
    this.beforeAll(() => {
        const response = { count: 1,
            next: null,
            previous: null,
            results:
             [ { name: 'R2-D2',
                 height: '96',
                 mass: '32',
                 hair_color: 'n/a',
                 skin_color: 'white, blue',
                 eye_color: 'red',
                 birth_year: '33BBY',
                 gender: 'n/a',
                 homeworld: 'https://swapi.co/api/planets/8/',                
                 vehicles: [],
                 starships: [],
                 created: '2014-12-10T15:11:50.376000Z',
                 edited: '2014-12-20T21:17:50.311000Z',
                 url: 'https://swapi.co/api/people/3/' } ] }

        nock('https://swapi.co/api/people')//Passar o response toda vez que for solicidata essa url com
        .get('/?search=r2-d2&format=json')   //Esses parametros
        .reply(200, response)
    })

    it('Deve buscar o r2d2 com o formato correto', async() => {        
        const expected = [{ //Definir o esperado
            nome: 'R2-D2',
             peso: '96' 
            }]
        const nomeBase = 'r2-d2'
        const resultado = await obterPessoa(nomeBase) //Pegar o resultado
        assert.deepEqual(resultado, expected) //Verificar se o resultado é igual ao experado

    })
})