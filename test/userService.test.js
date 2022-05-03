const userService = require('./../app/models/userService')

describe("Tests for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = userService.create(1, "carlogilmar", "Carlo")
        expect(user.userName).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})