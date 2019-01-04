const assert = require('assert') //validar variaveis
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres())

describe('Postgres Strategy', function() {
    this.timeout(Infinity)//Tem o tempo que quiser para conectar
    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
})