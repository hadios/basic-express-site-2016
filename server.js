var express = require("express");
var logger = require("morgan");


var app = express();
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res, next) {
    res.render("home", {});
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on http://localhost:" + (process.env.PORT || 3000))
});
