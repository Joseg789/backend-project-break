const request = require("supertest");
const app = require("../index");
const dbconnection = require("../config/db");
dbconnection();
describe("test de prueba", () => {
  it("should return  a 200 status code from the homepage", async () => {
    const response = await request(app).get("/");
    // console.log(response.status);
    // console.log(response.statusCode);
    // console.log(response.text);
    // console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  it(" shoult", () => {});
});
