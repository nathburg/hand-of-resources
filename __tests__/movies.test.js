const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /movies returns all movies', async () => {
    const resp = await request(app).get('/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
  });

  it('GET /movies/1 returns data for movie with id 1', async () => {
    const resp = await request(app).get('/movies/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "budget": "$7.00",
        "genre": "Action|Adventure|Sci-Fi",
        "id": 1,
        "title": "Tron",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
