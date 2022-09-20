const validation = require("../src//middleware/validation");

const next = jest.fn();
describe("Test Validation", ()=>{
    afterEach(() => {
        jest.clearAllMocks();
    })

    test("it should next with an error if not there is no name parameter in the query ", ()=>{
        const reqBad = {
            query: {
                abcd: "Mark"
            }
        };
        const res = {};
        validation(reqBad, res, next);
        expect(next.mock.lastCall.length).toBe(1); // Called with one argument (indicating error)
    });

    test("it should call next if there is a name parameter in the query ", ()=>{
        const reqGood = {
            query: {
                name: "Mark"
            }
        };

        const res = {};

        validation(reqGood, res, next);
        expect(next.mock.lastCall.length).toBe(0); // Called with no arguments
    });
});
