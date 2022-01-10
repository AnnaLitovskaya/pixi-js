const router = require('express')();
const {
  models: { User, Highscore },
} = require('../db/models/associations');

// get all users
router.get('/', async (req, res, next) => {
  try {
    res.send(await User.findAll());
  } catch (err) {
    next(err);
  }
});

// get single user by id with highscores
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    res.send(
      await User.findByPk(id, {
        include: {
          model: Highscore,
          limit: 5,
          order: [['score', 'DESC']],
        },
      }),
    );
  } catch (err) {
    next(err);
  }
});

// create new user
router.post('/', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({
      username,
      email,
      password,
    });
    res.status(201).send(newUser);
  } catch (err) {
    next(err);
  }
});

// delete user
router.delete('/:id', async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// update user
router.put('/:id', async (req, res, next) => {
  try {
    const userToUpdate = await User.findByPk(req.params.id);
    const { username, email, password } = req.body;

    await userToUpdate.update({
      username,
      email,
      password,
    });
    res.status(200).send(userToUpdate);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
