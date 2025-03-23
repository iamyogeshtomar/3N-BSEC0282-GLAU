const User = require(`../Schemas/userSchema.js`);
const bcryptjs = require(`bcryptjs`);

const showSignUpForm = (req, res) => {
  res.render(`signUpForm.ejs`);
};

// Signup Form
const newUserSignUp = async (req, res) => {
  const { name, username, dob, gender, email, phone, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = await User.create({
    name,
    username,
    dob,
    gender,
    email,
    phone,
    password: hashedPassword,
  });
  //   res.render();
//   res.redirect();
res.send(newUser);
};

module.exports = { newUserSignUp, showSignUpForm };
