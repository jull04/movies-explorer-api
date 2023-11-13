const router = require('express').Router();
const { addUser } = require('../controllers/users');
const { addUserValidation } = require('../middlewares/validation');

router.post('/', addUserValidation, addUser);

module.exports = router;
