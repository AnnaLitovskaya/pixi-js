const { db } = require('../db');
const User = require('./User');
const Highscore = require('./Highscore');

// associations
Highscore.belongsTo(User);
User.hasMany(Highscore);

// export models and db
module.exports = {
  db,
  models: {
    Highscore,
    User,
  },
};
