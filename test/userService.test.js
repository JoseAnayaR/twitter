const userService = require('./../app/models/userService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = userService.create(1, "joseanaya", "Jose")
        expect(user.userName).toBe("joseanaya")
        expect(user.name).toBe("Jose")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    
    test("2. Get all user data in a list", () =>{
        const user = userService.create(1, "joseanaya", "Jose")
        const userInfoInList = userService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("joseanaya")
        expect(userInfoInList[2]).toBe("Jose")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

})