var express = require('express')
var app = express();

app.use(express.static('public'));
app.set("view engine", "html")

app.get("/", function(req, res) {
	res.render("index.html");
})

var port = process.env.PORT ||  3001

app.listen(port, function(){
 console.log("Listening on port 3001")
})
