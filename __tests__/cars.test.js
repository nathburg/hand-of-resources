const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /cars returns array of all cars', async () => {
    const resp = await request(app).get('/cars');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toEqual(10);
  });

  it('GET /cars/1 returns info for car with id 1', async () => {
    const resp = await request(app).get('/cars/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": 1,
        "make": "Mercedes-Benz",
        "model": "CLK-Class",
        "year": "2001",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
