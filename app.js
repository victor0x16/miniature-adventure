const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send(process.env.ACCESS_TOKEN);
})

app.listen(PORT, () => {
	console.log( "PORT = " + PORT)
});

