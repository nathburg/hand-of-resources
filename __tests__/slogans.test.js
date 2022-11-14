const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /slogans returns all slogans', async () => {
    const resp = await request(app).get('/slogans');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
  });

  afterAll(() => {
    pool.end();
  });

  it('GET /slogans/1 returns data for flogan with id 1', async () => {
    const resp = await request(app).get('/slogans/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": 1,
        "slogan": "Banc of California, Inc.",
        "stock": "Banc of California, Inc.",
      }
    `);
  });

  it('POST /slogans should create a new slogan', async () => {
    const resp = await request(app).post('/slogans').send({
      stock: 'The Okay Company LLC',
      slogan: "We're Okay",
    });
    expect(resp.status).toBe(200);
    expect(resp.body.stock).toBe('The Okay Company LLC');
  });
});
