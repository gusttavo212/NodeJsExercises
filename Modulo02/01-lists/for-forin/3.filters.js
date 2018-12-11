const { obterPessoas} = require('./service') //do objeto quero só o item obterPessoas

Array.prototype.meuFilter = function (callback){
    const lista = []
    for (index in this) {    
            const item = this[index]  
            const result = callback(item, this);
            
            if(!result) continue;
            lista.push(item)
            
        }
        return lista;
}


async function main() {
    try{
        const {
            results
        } = await obterPessoas(`a`)

        /*
        const familiaLars = results.filter(function (item){
            //Por padrão precisa retornar um boolean
            //para informar se deve manter ou remover da lista
            //false > remove da lista = -1
            //true > mantem = posição no array
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })
        const names = familiaLars.map((pessoa) => pessoa.name)
        */
    const familiaLars = results.meuFilter(item => {
        console.log(`index: ${index}`, lista.length)
        item.name.toLowerCase().indexOf('lars') !== -1
    })

     const names = familiaLars.map((pessoa) => pessoa.name)

        console.log('names ', names)
    }catch (error) {
        console.error('DEU B.O', error)
    }
}

main()