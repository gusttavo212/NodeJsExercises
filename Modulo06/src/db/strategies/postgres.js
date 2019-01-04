const ICrud = require('.//interfaces/interfaceCrud')
const Sequelize = require('sequelize')
const driver = new Sequelize(
    'heroes',
    'gadsden',
    '250433',
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

class Postgres extends ICrud{
    constructor(){
        super()
        //Underline para coisas que vão ser privadas padrão de escrita
        this._driver = null  //variavel de driver de conexão
        this._herois = null //Modelo do banco
        //Quando a classe for instanciada vai conectar com o banco
        this._connect()
    }
    //Garantir se esta conectado
    async isConnected(){
        try{
            await this._driver.authenticate()
            return true
        }
        catch(error){
            console.log('Fail!!!', error)
            return false
        }

    }
    //Definir o modelo
    async defineModel(){
        this._herois = driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                requred: true
            },
            poder: {
                type: Sequelize.STRING,
                requred: true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })
        //Conectar
        await Herois.sync()
    }
    //Conectar
    _connect() {
        this._driver = new Sequelize(
            'heroes',
            'gadsden',
            '250433',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
    }

    create(item) {
        console.log("O item foi salvo em Postgres")
    }
}

module.exports = Postgres