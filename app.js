const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render("home");
})

// About Route
app.get('/about', (req, res) => {
  res.render("about");
})

// Contact Route
app.get('/contact', (req, res) => {
  res.render("contact");
})

// Recent Events Route
app.get('/recentEvents', (req, res) => {
  res.render("recentEvents");
})

// Publications/Video Route
app.get('/video', (req, res) => {
  res.render("publications/video");
})

// Publications/PrintMedia Route
app.get('/printMedia', (req, res) => {
  res.render("publications/printMedia");
})

// Publications/Podcasts Route
app.get('/podcasts', (req, res) => {
  res.render("publications/podcasts");
})

// Publications/Blog Route
app.get('/blog', (req, res) => {
  res.render("publications/blog");
})

// Publications/AcademicSpace Route
app.get('/academicSpace', (req, res) => {
  res.render("publications/academicSpace");
})

// Publications/TVAppearances Route
app.get('/tvAppearances', (req, res) => {
  res.render("publications/tvAppearances");
})

app.listen(port, () => {
  console.log(`App is live on localhost:${port}`)
})
