const express = require("express");
const app = express();
const path = require("path");

const port = 8000;

////setting folder for static assets
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, "public")));

//setting ejs
app.set("view engine", "ejs");
// app.set("views","views")
app.set("views", path.join(__dirname, "views"));

//home route
app.get("/", (req, res) => {
  res.render("home");
});

//services route
app.get("/personalities", (req, res) => {
  res.render("personalities");
});
app.get("/cities", (req, res) => {
  res.render("cities");
});
app.get("/spots", (req, res) => {
  res.render("spots");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
