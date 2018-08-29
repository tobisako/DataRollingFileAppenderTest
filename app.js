var accesslogger = require("./lib/log/accesslogger.js");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use(accesslogger());

app.use("/", require("./routes/index.js"));

app.listen(3000);
