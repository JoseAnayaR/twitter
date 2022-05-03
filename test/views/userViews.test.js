const UserView = require('./../../app/views/userViews')

describe("Test for UserView", () => {
    test("Return an error object when try to create a new user with an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })
})