const SearchController = require("./SearchController")
// @ponicode
describe("SearchController.index", () => {
    test("0", async () => {
        await SearchController.index({ query: "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';" }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        await SearchController.index({ query: "UPDATE Projects SET pname = %s WHERE pid = %s" }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("2", async () => {
        await SearchController.index({ query: 1 }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("3", async () => {
        await SearchController.index({ query: "UNLOCK TABLES;" }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("4", async () => {
        await SearchController.index({ query: 100 }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("5", async () => {
        await SearchController.index(undefined, undefined)
    })
})
