const functions = require('firebase-functions');

const express = require('express');
const app = express();

app.get('/helloWorld', (req, res) => {
  res.send('Hello from Firebase!');
});

app.get('/yamanosusume', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
  <head>
    <title>yamanosusume</title>
  </head>
  <body>
    <img src="https://i.ytimg.com/vi/bu1-Gajd7Sw/maxresdefault.jpg">
  </body>
</html>`);
});

exports.api = functions.https.onRequest(app);
