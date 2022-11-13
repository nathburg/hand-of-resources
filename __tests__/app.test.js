const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('returns all customers at /customers route', async () => {
    const resp = await request(app).get('/customers');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
  });
  afterAll(() => {
    pool.end();
  });
});
