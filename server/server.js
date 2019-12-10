const express = require('express');

const app = express();

app.use(express.static('public'));
// express.static looks at a request and returns the contents of a file based
// on the request URL’s path

// const fileServerMiddleware = express.static('public');
// app.use('/', fileServerMiddleware);

app.listen(3000, function () {
  console.log('App started on port 3000');
});
