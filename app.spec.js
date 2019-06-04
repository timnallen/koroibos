var shell = require('shelljs');
var request = require("supertest");
var app = require('./app');

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  afterAll(() => {
    shell.exec('npx sequelize db:seed:undo:all')
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  describe('Test GET /api/v1/olympians path', () => {
    test('should return a 200 status', () => {
      return request(app).get("/api/v1/olympians").then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
    test('should return an array of olympian objects', () => {
      return request(app).get("/api/v1/olympians").then(response => {
        expect(response.body.olympians.length).toEqual(2),
        expect(Object.keys(response.body.olympians[0])).toContain('name')
        expect(Object.keys(response.body.olympians[0])).toContain('team'),
        expect(Object.keys(response.body.olympians[0])).toContain('age'),
        expect(Object.keys(response.body.olympians[0])).toContain('sport')
        expect(Object.keys(response.body.olympians[0])).toContain('total_medals_won')
      })
    });
  });
});
