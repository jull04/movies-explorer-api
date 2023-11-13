const router = require('express').Router();
const { editUserDataValidation } = require('../middlewares/validation');
const { getMeUser, editUserData } = require('../controllers/users');

router.get('/me', getMeUser);

router.patch('/me', editUserDataValidation, editUserData);

module.exports = router;
