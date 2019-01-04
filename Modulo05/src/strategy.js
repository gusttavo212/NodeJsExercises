//Classe de erro para quando se chama um metodo que não foi implementado
class NotImplementedExecption extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

//Interface
class ICrud{
    create(item){
        throw new NotImplementedExecption()
    }

    read(query){
        throw new NotImplementedExecption()
    }

    update(id, item){
        throw new NotImplementedExecption()
    }
    
    delete(id){
        throw new NotImplementedExecption()
    }
}

class MongoDB extends ICrud{
    constructor(){
        super()
    }

    create(item) {
        console.log("O item foi salvo em MongoDB")
    }

}

class Postgres extends ICrud{
    constructor(){
        super()
    }

    create(item) {
        console.log("O item foi salvo em Postgres")
    }
}

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
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

