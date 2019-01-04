// npm install sequelize pg-hstore pg
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

async function main() {
    const Herois = driver.define('herois', {
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
    //CREATE
    await Herois.create({
        nome: 'Lanterna Verde',
        poder: 'Anel'
    })
    //SELECT
    const result = await Herois.findAll({
        raw: true //Filtra infromações
    })
    console.log('result', result)
}

main()