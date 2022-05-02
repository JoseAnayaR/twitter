const User = require("./../app/models/user")
describe("Test para User", () => {
    test("Requerimiento 1: Creacion de User", ()=> {
        const user = new User(1, "joseanaya", "Jose", "Bio", "dateCreated", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.userName).toBe("joseanaya")
        expect(user.name).toBe("Jose")
        expect(user.bio).toBe("Bio")
    })

    test("Requerimiento 2: Fechas en atributos de User", () => {
        const user = new User(1, "joseanaya", "Jose", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })
})