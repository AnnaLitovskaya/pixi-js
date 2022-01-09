const { app } = require('./app');
// const db = require('./db/db.js');
// const syncAndSeed = require('./db/seed.js');

const port = process.env.PORT || 3000;

const run = () => {
  try {
    // db.authenticate(); // figure out what this does.
    // await syncAndSeed();
    app.listen(port, () => console.log(`App running on port ${port}!`));
  } catch (err) {
    console.log('error listening on port', err);
  }
};

run();

// module.exports = app;
