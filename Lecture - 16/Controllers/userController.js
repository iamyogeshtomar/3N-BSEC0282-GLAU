const User = require(`../Schemas/userSchema.js`);
const bcryptjs = require(`bcryptjs`);

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

// Signup Form
const newUserSignUp = async (req, res) => {
  const { name, username, dob, gender, email, phone, password } = req.body;
  // const hashedPassword = await bcryptjs.hash(password, 10);
  // const newUser = await User.create({
  //   name,
  //   username,
  //   dob,
  //   gender,
  //   email,
  //   phone,
  //   password: hashedPassword,
  // });
  const user = await new User({ name, username, dob, gender, email, phone });
  console.log(user);
  const newUser = await user.register(user, password);
  newUser.save();
  //   res.render();
  req.flash(`success`, `Sign up successful`);
  res.redirect(`/login`);
  // res.send(newUser);
};

const showLoginForm = (req, res) => {
  res.render(`loginForm.ejs`, { msg: req.flash(`success`) });
};

// const loginUser = async (req, res) => {
//   // const user = await User.findOne({ email: email });
//   // console.log(user);
//   // if (!user) {
//   //   // res.send()
//   //   req.flash(`error`, `login failed`);
//   //   res.redirect(`/login`);
//   }
//   const checkPassword = await bcryptjs.compare(password, user.password);
//   console.log(checkPassword);
//   if (checkPassword) {
//     //login
//     req.session.email = user.email;
//     req.session.username = user.username;
//     req.flash(`success`, `Sign in successful`);
//     console.log(req.session);
//     res.redirect(`/`);
//   } else {
//     req.flash(`error`, `Incorrect Password`);
//     res.redirect(`/login`);
//   }
// };

module.exports = { newUserSignUp, showSignUpForm, showLoginForm };
