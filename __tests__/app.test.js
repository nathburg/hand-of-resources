const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /customers returns all customers', async () => {
    const resp = await request(app).get('/customers');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
  });
  it('GET /customers/1 returns data for customer with id 1', async () => {
    const resp = await request(app).get('/customers/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "email": "whabishaw0@wired.com",
        "first_name": "Woodman",
        "gender": "Male",
        "id": 1,
        "last_name": "Habishaw",
      }
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
