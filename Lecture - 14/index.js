const express = require(`express`);
const mongoose = require(`mongoose`);
const ejs = require(`ejs`);
const path = require(`path`);
const app = express();
const PORT = 3000;

(() => {
  try {
    mongoose.connect(`mongodb://127.0.0.1/birbal`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.urlencoded({ extended: true }));

// app.use(`/user`, require(`./Routes/userRoutes.js`));
app.use(require(`./Routes/postsRoutes.js`));

app.set(`view engine`, `ejs`);
app.use(express.static(path.resolve(__dirname, `views`)));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
