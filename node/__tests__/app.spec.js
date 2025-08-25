const request = require('supertest');
const app = require('../app');

describe('POST /api/sum', () => {
  it('returns sum for valid numbers', async () => {
    const res = await request(app)
      .post('/api/sum')
      .send({ a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ sum: 5 });
  });

  it('validates inputs', async () => {
    const res = await request(app)
      .post('/api/sum')
      .send({ a: "x", b: 3 });
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Invalid input" });
  });
});
