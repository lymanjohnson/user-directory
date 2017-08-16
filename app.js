
const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const app = express();
const dataFile = require("./data.js")

app.engine("mustache", mustacheExpress());
app.set("views", "./views")
app.set("view engine", "mustache")


//Listening on root
app.get("/", function (req, res) {
		res.send(dataFile);
})

app.get("/directory/", function (req, res) {
		res.render('directory',dataFile);
})

app.get("/user/:username", function (req, res) {
		res.send(req.params.username);
})

app.listen(3000, function () {
	  console.log("Successfully started express application!");
})

//
// app.get('/user/:id', function(request, response) {
//   response.send('user ' + request.params.id);
// });
