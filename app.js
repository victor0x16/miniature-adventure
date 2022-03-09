const express = require('express');
const app = express();

// curl -X POST https://api.twitter.com/2/tweets -H "Authorization: Bearer $ACCESS_TOKEN" -H "Content-type: application/json" -d '{"text": "Hello World!"}'

const PORT = process.env.PORT || 5000;


app.get('/', function (req, res) {
  res.send("404 - page has changed!");
});


// api
app.get("/api/interactions", function (req, res) {
   res.send({ test: "you're in a test!" });
});

app.get("/terms-of-service", function (req, res) {
 //  res.sendFile("./assets/index.html");
 res.send("Read it carefully.");
});


app.get("/privacy-policy", function (req, res) {
 //  res.sendFile("./assets/index.html");
 res.send("My company is providing your safety");
});

app.listen(PORT, () => {
	console.log( "PORT = " + PORT)
});

