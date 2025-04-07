const express = require(`express`);
const mongoose = require(`mongoose`);
const ejs = require(`ejs`);
const path = require(`path`);
const session = require(`express-session`);
const flash = require(`connect-flash`);
const MongoStore = require(`connect-mongo`);
const passport = require(`passport`);
const LocalStrategy = require(`passport-local`);
const app = express();
const PORT = 3000;

(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/birbal`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const User = require(`./Schemas/userSchema.js`);

app.use(express.urlencoded({ extended: true }));

app.set(`view engine`, `ejs`);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb://127.0.0.1/birbal`,
    }),
    // cookie: { secure: true },
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash(`success`);
  res.locals.error = req.flash(`error`);
  // res.send(`<h2>response sent</h2>`);
  // console.log(`response gone`);
  next();
});

// app.use(`/user`, require(`./Routes/userRoutes.js`));
app.use(require(`./Routes/postsRoutes.js`));
app.use(require(`./Routes/userRoutes.js`));

app.set(`view engine`, `ejs`);
app.use(express.static(path.resolve(__dirname, `views`)));

app.get(`/verify`, (req, res) => {
  console.log(req.session);
  res.redirect(`back`);
});

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
