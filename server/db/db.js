const { Sequelize } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/fullstackTemplate',
  { logging: false }
);

// This is for the testing suite
const initDB = async () => {
  try {
    await db.sync({ force: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { db, initDB };
