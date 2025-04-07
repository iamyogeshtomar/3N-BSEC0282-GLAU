const express = require(`express`);
const router = express.Router();
const User = require(`../Schemas/userSchema.js`);

const {
  newUserSignUp,
  showSignUpForm,
  loginUser,
  showLoginForm,
} = require(`../Controllers/userController.js`);

router.get(`/signup`, showSignUpForm);

router.post(`/signup`, async (req, res) => {
  const { name, username, dob, gender, email, phone, password } = req.body;
  const user = await new User({ name, username, dob, gender, email, phone });
  console.log(user);
  // const newUser = await user.register(user, password);
  const newUser = await User.register(user, password);
  newUser.save();
  //   res.render();
  req.flash(`success`, `Sign up successful`);
  res.redirect(`/login`);
});

router.get(`/login`, showLoginForm);

// router.post(
//   "/login",
//   User.authenticate("local", {
//     failureRedirect: "/login",
//   }),
//   function (req, res) {
//     res.redirect("/posts");
//   }
// );

module.exports = router;
