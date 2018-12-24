var express = require("express");

var app = express();

app.use("/node_modules", express.static("/usr/src/sportsstore/node_modules"));
app.use("/", express.static("/usr/src/sportsstore/app"));

app.listen(3000, function() {
	console.log("HTTP server running on port 3000");	
});
