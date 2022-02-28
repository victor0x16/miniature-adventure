const express = require('express');
const app = express();

// curl -X POST https://api.twitter.com/2/tweets -H "Authorization: Bearer $ACCESS_TOKEN" -H "Content-type: application/json" -d '{"text": "Hello World!"}'

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send("Hello, World!");
})

app.listen(PORT, () => {
	console.log( "PORT = " + PORT)
});

