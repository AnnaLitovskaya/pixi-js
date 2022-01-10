const { Router } = require('express');

const router = Router();

router.use('/user', require('./user'));
router.use('/highscore', require('./highscore'));
// router.use('/google', require('./google'));

module.exports = router;
