const supertest = require("supertest");
const {app} = require("../src/server");

const request = supertest(app);

jest.spyOn(console, "log").mockImplementation(()=>{});

describe("Test app routes", ()=>{
    describe("test person route", ()=>{
        test("test getting person with name query param", async ()=>{
            const resp = await request.get("/person?name=Mark").expect("Content-Type", /json/).expect(200);
            expect(resp.body.name).toBe("Mark");
        });

        test("test getting person without name query param resulting in 500 error", async ()=>{
            const resp = await request.get("/person?abcd=Mark").expect(500);
        });

        test("test undefined route gives 404 error", async ()=>{
            await request.get("/child?name=Mark").expect(404);
            await request.get("/child?abcd=Mark").expect(404);
            await request.get("/child").expect(404);
        });
    })
})
