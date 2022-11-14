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

  afterAll(() => {
    pool.end();
  });
});
