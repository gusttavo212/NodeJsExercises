const{
    //ler os arquivos
    readFile,
    writeFile
} = require('fs')

const {
    //transformar callback em promisse
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile) // converter para promisse para n ter q usar callback

//outra forma de obter dados do jason
// const dadosJson = require('./herois.json')

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo(){
        //Pegando o json
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    //vai receber informações e escrever no arquivo
<<<<<<< HEAD
    async escreverArquivo(dados){
=======
    async escreverArquivo(){
>>>>>>> 4f83831a42ef9156de7f272192057401695e72a3

        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true;

    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()// Pegador dados obtidos
<<<<<<< HEAD
        const id = heroi.id <= 2 ? heroi.id : Date.now() //Se o id for <= 2 use o heroi.id se não use a hora

        //Concatenar objetos
        const heroidComId = {           
            ...heroi,
            id,//Esse id é gerado na função
=======
        const id = heori.id <= 2 ? heroi.id : Date.now() //Se o id for <= 2 use o heroi.id se não use a hora

        //Concatenar objetos
        const heroidComId = {
            id,//Esse id é gerado na função
            ...heroi
>>>>>>> 4f83831a42ef9156de7f272192057401695e72a3
        }

        //Concatenar o array com o objeto
        const dadosFinal = {
            ...dados,
            heroidComId
        }
        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado;
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => (id ? item.id == id : true));
        return dadosFiltrados
    }

    
}

module.exports = new Database()