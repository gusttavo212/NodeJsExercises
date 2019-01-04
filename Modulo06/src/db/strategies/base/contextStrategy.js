const ICrud = require('./../interfaces/interfaceCrud')

class ContextStrategy extends ICrud {
    constructor(database) {  
        super()      
        this._database = database
    }

    create(item){
        return this._database.create(item)
    }
    read(item){
        return this._database.read(item)
    }
    update(id, item){
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(item)
    }
    isConnected(){
        return this._database.isConnected()
    }
}

module.exports = ContextStrategy