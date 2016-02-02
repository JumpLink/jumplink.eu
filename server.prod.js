/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;

const server = express();

server.set('view engine', 'jade');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, 'public')));

server.use('/', (req, res) => (
  res.render(path.join(__dirname, 'src', 'markup', 'index'))
));

server.listen(PORT, 'localhost', err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`=> 🚀  Production server is running on port ${PORT}`);
});