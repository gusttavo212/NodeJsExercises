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
    isConnected(){
        throw new NotImplementedExecption()
    }
}

module.exports = ICrud