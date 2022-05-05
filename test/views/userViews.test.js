const UserView = require('./../../app/views/userViews')

describe("Tests for UserView", () => {

  test("1)Return an error object when try to create a new user with an null payload", () => {
    const payload = null
    const result = UserView.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/)
  })

  test("2)Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })

  test("3)Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: "Username"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })

  test("4)Create a user by a given valid payload", () => {
    const payload = {username: "username", id: 1, name: "name"}
    const result = UserView.createUser(payload)
    expect(result.name).toBe("name")
    expect(result.userName).toBe("username")
    expect(result.id).toBe(1)
  })

})