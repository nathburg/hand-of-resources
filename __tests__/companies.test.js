const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /companies returns all companies', async () => {
    const resp = await request(app).get('/companies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
  });

  it('GET /companies/1 returns data for companies with id 1', async () => {
    const resp = await request(app).get('/companies/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "city": "Khokhryaki",
        "company": "Brainsphere",
        "country": "Russia",
        "id": 1,
        "latitude": "56.9154663",
        "preferred_currency": "Ruble",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
