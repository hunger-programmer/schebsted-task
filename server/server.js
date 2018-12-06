const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const serveStatic = require('serve-static');
require('twig');

const app = express();

dotenv.config();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'twig');
app.set('views', `${__dirname}/template/`);

app.use(serveStatic(`${__dirname}/../dist`));

app.use((req, res, next) => {
  res.locals = {
    ENV: process.env.NODE_ENV,
    VERSION: process.env.VERSION,
  };

  next();
});

app.use('/', require('./route/index'));
app.use('/api/v1/videos/', require('./route/api/videos'));

app.use((req, res) => {
  res.status(404).render('404');
});

const port = process.env.PORT || 9080;

app.listen(
  port,
  () => console.log(`Listening on port ${port}`),
);
