const express = require('express');
const app = express();

const { products, people } = require('./data');
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

const logger = (req, rest, next) => {
  console.log(
    `Request Method: ${req.method}, Request URL: ${
      req.url
    }, ${new Date().toLocaleString()}`
  );
  next();
};

//  static assets
app.use(express.static('./methods-public'));

// Parse form data -> handles the POST data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());
app.use(logger);

app.get('/', logger, (req, res) => {
  console.log('logger');
  res.send(logger);
});

app.use('/api/v1/people', peopleRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000....');
});
