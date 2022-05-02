class User {
    constructor(id, userName, name, bio){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    get getUserName(){
        return this.userName
    }
    set setUserName(newUserName){
        this.userName = newUserName
    }
}

module.exports = User