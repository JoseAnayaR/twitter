const User = require("./../app/models/user")
describe("Prueba de jest", () => {
    test("Prueba 1", ()=> {
        const user = new User(1, "joseanaya", "Jose", "Bio", "dateCreated", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.userName).toBe("joseanaya")
        expect(user.name).toBe("Jose")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdate")
    })
})