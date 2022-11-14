const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST /companies should create a new company', async () => {
    const resp = await request(app).post('/companies').send({
      city: 'Vancouver',
      company: 'The Okay Company',
      preferred_currency: 'Bitcoin',
      latitude: '45.8260',
      country: 'USA',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.company).toBe('The Okay Company');
  });

  it('PUT /companies/1 updates data at id 1', async () => {
    const resp = await request(app).put('/companies/1').send({
      preferred_currency: 'Dollar',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.preferred_currency).toBe('Dollar');
    expect(resp.body.company).toBe('Brainsphere');
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
