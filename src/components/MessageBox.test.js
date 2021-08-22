const MessageBox = require("./MessageBox")
// @ponicode
describe("onChange", () => {
    let inst

    beforeEach(() => {
        inst = new MessageBox.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
