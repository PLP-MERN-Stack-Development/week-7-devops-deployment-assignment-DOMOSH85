jest.setTimeout(30000);
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const express = require('express');
const bugRoutes = require('../../routes/bug.routes');
const Bug = require('../../models/bug.model');

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  app = express();
  app.use(express.json());
  app.use('/api', bugRoutes);
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
});

afterEach(async () => {
  await Bug.deleteMany();
});

describe('Bug API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test bug', description: 'Test desc' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test bug');
  });

  it('should get all bugs', async () => {
    await Bug.create({ title: 'Bug1' });
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should get a bug by id', async () => {
    const bug = await Bug.create({ title: 'Bug2', description: 'desc2' });
    const res = await request(app).get(`/api/bugs/${bug._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Bug2');
  });

  it('should update a bug by id', async () => {
    const bug = await Bug.create({ title: 'Bug3', status: 'open' });
    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'closed' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('closed');
  });

  it('should delete a bug by id', async () => {
    const bug = await Bug.create({ title: 'Bug4' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
    // Confirm it's gone
    const getRes = await request(app).get(`/api/bugs/${bug._id}`);
    expect(getRes.statusCode).toBe(404);
  });
}); 