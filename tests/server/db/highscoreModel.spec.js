const {
  models: { Highscore },
} = require('../../../server/db/models/associations');
const { db, initDB } = require('../../../server/db/db');

let highscore;

beforeAll(async () => {
  await initDB();

  highscore = await Highscore.create({
    score: 3,
    game: 'Tic Tac Toe',
  });
});

afterAll(() => {
  db.close();
});

it('Highscore model exists', () => {
  expect(highscore.score).toEqual(3);
});

it('Game name is valid', async () => {
  try {
    const newGame = await Highscore.create({
      score: 12,
      game: 'Tic Tac Toc',
    });

    newGame.validate();
  } catch (error) {
    expect(error.message).toBe(
      'invalid input value for enum enum_highscores_game: "Tic Tac Toc"'
    );
  }
});
