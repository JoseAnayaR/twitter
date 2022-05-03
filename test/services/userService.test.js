const userService = require('../../app/services/userService')

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
    test("3. Update userName", () =>{
        const user = userService.create(1, "joseanaya", "Jose")
        userService.updateUserUserName(user, "janaya")
        expect(user.userName).toBe("janaya")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = userService.create(1, "joseanaya1", "Jose")
        const user2 = userService.create(1, "joseanaya2", "Jose")
        const user3 = userService.create(1, "joseanaya3", "Jose")
        const usernames = userService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("joseanaya1")
        expect(usernames).toContain("joseanaya2")
        expect(usernames).toContain("joseanaya3")
      })

})