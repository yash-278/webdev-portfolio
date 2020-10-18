const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
  console.log("Started local server");
}
app.listen(port);
