const express = require(`express`);
const router = express.Router();

const {
  newUserSignUp,
  showSignUpForm,
} = require(`../Controllers/userController.js`);

router.get(`/new`, showSignUpForm);

router.post(`/`, newUserSignUp);

module.exports = router;