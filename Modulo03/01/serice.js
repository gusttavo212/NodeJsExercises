const{
    get
} = require('axios')

const URL = 'https://swapi.co/api/people'

async function obterPessoa(nome) {
    const url = `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    console.log(JSON.stringify(result.data))
    return result.data.results.map(mapearPessoas)
}

function mapearPessoas (item){
    return{
        nome: item.name, //Pegar o nome direto da api
        peso: item.height
    }
}

module.exports = {
    obterPessoa
}