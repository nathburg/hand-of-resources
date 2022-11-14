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
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": 1,
          "saying": "repurpose out-of-the-box ROI",
          "stock": "Banc of California, Inc.",
        },
        Object {
          "id": 2,
          "saying": "revolutionize enterprise deliverables",
          "stock": "Medley Capital Corporation",
        },
        Object {
          "id": 3,
          "saying": "evolve seamless relationships",
          "stock": "Liberty Expedia Holdings, Inc.",
        },
        Object {
          "id": 4,
          "saying": "whiteboard leading-edge portals",
          "stock": "Corvus Pharmaceuticals, Inc.",
        },
        Object {
          "id": 5,
          "saying": "seize user-centric niches",
          "stock": "Mizuho Financial Group, Inc.",
        },
        Object {
          "id": 6,
          "saying": "deploy interactive infrastructures",
          "stock": "PIMCO Municipal Income Fund",
        },
        Object {
          "id": 7,
          "saying": "disintermediate customized ROI",
          "stock": "Orthofix International N.V.",
        },
        Object {
          "id": 8,
          "saying": "drive cross-media interfaces",
          "stock": "AllianceBernstein Holding L.P.",
        },
        Object {
          "id": 9,
          "saying": "target rich web services",
          "stock": "Ferro Corporation",
        },
        Object {
          "id": 10,
          "saying": "matrix global functionalities",
          "stock": "Cars.com Inc.",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });

  it('POST /slogans should create a new slogan', async () => {
    const resp = await request(app).post('/slogans').send({
      stock: 'The Okay Company LLC',
      // eslint-disable-next-line quotes
      saying: "We're Okay",
    });
    expect(resp.status).toBe(200);
    expect(resp.body.stock).toBe('The Okay Company LLC');
  });

  it('PUT /slogans/1 updates data at id 1', async () => {
    const resp = await request(app).put('/slogans/1').send({
      stock: 'Nathan',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.stock).toBe('Nathan');
    expect(resp.body.saying).toBe('repurpose out-of-the-box ROI');
  });

  it('DELETE /slogans/1 deletes row 1', async () => {
    const resp = await request(app).delete('/slogans/1');
    expect(resp.status).toEqual(204);

    const slogan = await request(app).get('/slogans/1');
    expect(slogan.body).toEqual(null);
    const slogan2 = await request(app).get('/slogans/2');
    expect(slogan2.body).toMatchInlineSnapshot(`
      Object {
        "id": 2,
        "saying": "revolutionize enterprise deliverables",
        "stock": "Medley Capital Corporation",
      }
    `);
  });

  it('GET /slogans/1 returns data for slogan with id 1', async () => {
    const resp = await request(app).get('/slogans/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": 1,
        "saying": "repurpose out-of-the-box ROI",
        "stock": "Banc of California, Inc.",
      }
    `);
  });
});
