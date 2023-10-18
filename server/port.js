/* eslint-disable no-console */

const { app } = require('./app');

const port = process.env.PORT || 3000;

const run = async () => {
  try {
    app.listen(port, () => console.log(`App running on port ${port}!`));
  } catch (err) {
    console.log('error listening on port', err);
  }
};

run();

// module.exports = app;
