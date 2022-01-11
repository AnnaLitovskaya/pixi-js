const supertest = require('supertest');
const { app } = require('../../../server/app');

const request = supertest(app);

const { db, initDB } = require('../../../server/db/db');

const {
  models: { User, Highscore },
} = require('../../../server/db/models/associations');

describe('User Routes', () => {
  const users = [
    {
      username: 'billyW',
      password: 'password123',
      email: 'billyw@gmail.com',
    },
    {
      username: 'susancaddy',
      password: 'password123',
      email: 'susiecad@gmail.com',
    },
    {
      username: 'bugsbunny',
      password: 'password123',
      email: 'carrotsw@gmail.com',
    },
  ];
  const highscores = [
    {
      game: 'Hangman',
      score: 4,
      userId: 1,
    },
    {
      game: 'Hangman',
      score: 2,
      userId: 1,
    },
  ];
  beforeAll(async () => {
    // await db.sync({ force: true });
    await initDB();
    await User.bulkCreate(users);
    await Highscore.bulkCreate(highscores);
  });
  afterAll(async () => {
    await db.close();
  });

  // test('GET /api/user returns all users', async () => {
  //   const response = await request.get('/api/user');
  //   expect(response.body.length).toBe(3);
  // });

  // test('GET /api/user/:id returns user highscores', async () => {
  //   const response = await request.get('/api/user/1');
  //   expect(response.body.highscores.length).toBe(2);
  // });

  // test('POST /api/user creates new user', async () => {
  //   const newUser = {
  //     username: 'michelleO',
  //     email: 'mobama@gmail.com',
  //     password: 'password123',
  //   };
  //   const response = await request.post('/api/user').send(newUser);
  //   expect(response.body.username).toBe(newUser.username);
  // });

  test('PUT /api/user/:id updates a user', async () => {
    const response = await request
      .put('/api/user/1')
      .send({ email: 'actuallythis@gmail.com' });
    expect(response.body.email).toBe('actuallythis@gmail.com');
  });

  // test('DELETE /api/user/:id deletes user', async () => {
  //   const response = await request.delete('/api/user/1');
  //   expect(response.status).toEqual(204);
  // });
});
