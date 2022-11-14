const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST /cars should create a new car', async () => {
    const resp = await request(app).post('/cars').send({
      make: 'Kia',
      model: 'Rio',
      year: 2006,
      VIN: 'WBAYF8C50FD550384',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.model).toBe('Rio');
  });

  it('PUT /cars/1 updates data at id 1', async () => {
    const resp = await request(app).put('/cars/1').send({ year: 1945 });
    expect(resp.status).toBe(200);
    expect(resp.body.year).toEqual('1945');
    expect(resp.body.make).toBe('Mercedes-Benz');
  });

  it('DELETE /cars/1 deletes row 1', async () => {
    const resp = await request(app).delete('/cars/1');
    expect(resp.status).toEqual(204);

    const car = await request(app).get('/cars/1');
    expect(car.body).toEqual(null);
    const car2 = await request(app).get('/cars/2');
    expect(car2.body).toMatchInlineSnapshot(`
      Object {
        "id": 2,
        "make": "Dodge",
        "model": "Ram Van 1500",
        "year": "2001",
      }
    `);
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
