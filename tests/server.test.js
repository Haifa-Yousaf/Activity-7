const request = require('supertest');
const app = require('../src/server');

describe('API integration tests', () => {
  test('GET /api/ping returns ok', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('POST /api/sum success', async () => {
    const res = await request(app)
      .post('/api/sum')
      .send({ a: 3, b: 4 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(7);
  });

  test('POST /api/sum invalid input', async () => {
    const res = await request(app)
      .post('/api/sum')
      .send({ a: 'x', b: 2 });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('invalid input');
  });
});
