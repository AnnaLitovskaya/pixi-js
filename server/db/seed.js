/* eslint-disable no-console */

const { db } = require('./db');
const {
  models: { User, Highscore },
} = require('./models/associations');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const users = [
      {
        username: 'verykeri',
        email: 'keri@test.com',
        password: 'password123',
      },
      {
        username: 'hugohugo',
        email: 'hugo@test.com',
        password: 'password123',
      },
      {
        username: 'aviandamien',
        email: 'damien@test.com',
        password: 'password123',
      },
      {
        username: 'tiredtalia',
        email: 'talia@test.com',
        password: 'password123',
      },
    ];
    await Promise.all(
      users.map((user) => {
        User.create(user);
      }),
    );

    const highscores = [
      {
        game: 'Tic Tac Toe',
        score: 6,
        userId: 1,
      },
      {
        game: 'Tic Tac Toe',
        score: 4,
        userId: 2,
      },
      {
        game: 'Tic Tac Toe',
        score: 8,
        userId: 3,
      },
      {
        game: 'Tic Tac Toe',
        score: 8,
        userId: 1,
      },
      {
        game: 'Hangman',
        score: 5,
        userId: 1,
      },
      {
        game: 'Hangman',
        score: 5,
        userId: 2,
      },
      {
        game: 'Hangman',
        score: 2,
        userId: 3,
      },
      {
        game: 'Hangman',
        score: 7,
        userId: 4,
      },
      {
        game: 'Speed Clicker',
        score: 10,
        userId: 1,
      },
      {
        game: 'Speed Clicker',
        score: 10,
        userId: 2,
      },
      {
        game: 'Speed Clicker',
        score: 8,
        userId: 3,
      },
      {
        game: 'Speed Clicker',
        score: 23,
        userId: 4,
      },
    ];

    await Promise.all(
      highscores.map((highscore) => {
        Highscore.create(highscore);
      }),
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = syncAndSeed;
