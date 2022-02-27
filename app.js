const express = require('express');
const app = express();


const PORT = process.env.port;

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(PORT, () => {
	console.log( process.env.hostname + ":" + PORT)
});

