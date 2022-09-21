const logger = require("../src//middleware/logger");

const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test Logger", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("it should call console.log with path and method", () => {
    const req = {
      path: "/path-to-route",
      method: "GET",
    };
    logger(req, {}, () => {});
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/path-to-route/));
    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/GET/));
  });
});
