const {
  models: { User },
} = require('../../../server/db/models/associations');
const { db, initDB } = require('../../../server/db/db');

let user;

beforeAll(async () => {
  await initDB();

  user = await User.create({
    username: 'JDoe02',
    password: 'bcrypt02',
    email: 'blabla@yahoo.com',
  });
});

afterAll(() => {
  db.close();
});

it('User model exists', () => {
  expect(user.email).toEqual('blabla@yahoo.com');
});

it('User email is valid email', async () => {
  try {
    const newUser = await User.create({
      username: 'JDoe02',
      password: 'bcrypt02',
      email: 'blablayahoo.com',
    });

    newUser.validate();
  } catch (error) {
    expect(error.message).toBe(
      'Validation error: Validation isEmail on email failed',
    );
  }
});
