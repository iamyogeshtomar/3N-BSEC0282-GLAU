const express = require(`express`);
const app = express();
const PORT = 3000;

// console.log(express);
// console.log(app);
// console.log(express)

app.use(express.json());


app.get(`/`, (req, res) => {
  // express.json();
  //   res.send(`<h1>Hello client!!!</h1>`);
});

// Params
app.get(`/params/:name/:place`, (req, res) => {
  //   express.json();
  //   console.log(req);
  //   console.log(req.params);
  res.send(
    `<h1>My name is ${req.params.name} and I live in ${req.params.place}</h1>`
  );
});

// query || query parameters
app.get(`/query`, (req, res) => {
  //   console.log(req.query);
  res.send(
    `<h1>My name is ${req.query.name} and I live in ${req.query.place}</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
