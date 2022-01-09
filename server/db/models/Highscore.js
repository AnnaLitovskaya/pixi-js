const { db } = require('../db');
const { DataTypes } = require('sequelize');

const Highscore = db.define('highscore', {
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  game: {
    type: DataTypes.ENUM(['Tic Tac Toe', 'Speed Clicker', 'Hangman']),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Highscore;
