import app from "../app.js";
import supertest from "supertest";
import request from "supertest";

describe("POST /weather", () => {
  describe("city is exist", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/weather").send({
        cityName: "Amsterdam",
      });
      expect(response.statusCode).toBe(200);
    });
  });
  describe("city is not found", () => {
    test("should respond with a 400 status code", async () => {
      const response = await request(app).post("/weather").send({
        cityName: "dasdas",
      });
      expect(response.statusCode).toBe(400);
    });
  });
  describe("request cityName is empty", () => {
    test("should response with 400 status code", async () => {
      const response = await request(app)
        .post("/weather")
        .send({ cityName: "" });
      expect(response.statusCode).toBe(404);
    });
  });
});
