const User = require('./user')

class userService {
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }
}

module.exports = userService