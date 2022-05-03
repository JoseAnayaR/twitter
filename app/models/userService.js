const User = require('./user')

class userService {
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }
    static getInfo(user){
        return Object.values(user)
    }
    static updateUserUserName(user, UserName){
        user.userName = UserName
    }
    static getAllUsernames(user,){
        const userUsernames = user.map(user => user.userName)
        return userUsernames 
    }
}

module.exports = userService