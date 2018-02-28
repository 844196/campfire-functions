const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((req, res) => {
 res.send('Hello from Firebase!');
});

exports.yamanosusume = functions.https.onRequest((req, res) => {
  const content = `<!DOCTYPE html>
<html>
  <head>
    <title>yamanosusume</title>
  </head>
  <body>
    <img src="https://i.ytimg.com/vi/bu1-Gajd7Sw/maxresdefault.jpg">
  </body>
</html>`;

  res.status(200).send(content);
});
