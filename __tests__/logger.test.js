const logger = require("../src//middleware/logger");

const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test Logger", ()=>{
    afterEach(() => {
        jest.restoreAllMocks();
    })
    test("it should call console.log with path and method", ()=>{
        const req = {
            path: "/path-to-route",
            method: "GET"
        };
        logger(req, {}, ()=>{});
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy.mock.calls[0][0].match(/path-to-route/));
        expect(logSpy.mock.calls[0][0].match(/GET/));
    })
})
