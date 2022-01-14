const supertest = require('supertest');
const { app } = require('../../../server/app');

const request = supertest(app);

const { db, initDB } = require('../../../server/db/db');

const {
  models: { Highscore },
} = require('../../../server/db/models/associations');

describe('Highscore Routes', () => {
  const highscores = [
    {
      game: 'Hangman',
      score: 4,
    },
    {
      game: 'Hangman',
      score: 2,
    },
    {
      game: 'Tic Tac Toe',
      score: 4,
    },
    {
      game: 'Speed Clicker',
      score: 8,
    },
  ];
  beforeAll(async () => {
    await initDB();
    await Highscore.bulkCreate(highscores);
  });
  afterAll(async () => {
    await db.close();
  });

  test('GET /api/highscore returns all highscore', async () => {
    const response = await request.get('/api/highscore');
    expect(response.body.length).toBe(4);
  });

  test('GET /api/highscore/:id returns highscores based on game Id', async () => {
    const response = await request.get('/api/highscore/Hangman');
    expect(response.body.length).toBe(2);
  });

  test('POST /api/highscore creates new highscore', async () => {
    const newHighscore = {
      score: 3,
      game: 'Tic Tac Toe',
    };
    const response = await request.post('/api/highscore').send(newHighscore);
    expect(response.body.game).toBe(newHighscore.game);
  });

  test('DELETE /api/highscore/:id deletes highscore', async () => {
    const response = await request.delete('/api/highscore/1');
    expect(response.status).toEqual(204);
  });
});
