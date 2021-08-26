const express = require('express');
const passport = require('passport');
const morgan = require('morgan');
const { format } = require('date-fns');
const cors = require('cors');
const colors = require('colors');

const { SERVER_PORT, CLIENT_ORIGIN } = require('./config');

const app = express();

morgan.token('date', () => format(new Date(), 'h:mm:ss a'));

app.use(
  morgan(
    '":method :url" :status :res[content-length] - :response-time ms [:date[America/Denver]]',
  ),
);

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  }),
);

app.use(passport.initialize());

app.use(express.json());

app.use(require('./routes'));

app.use(({ next }) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, request, response, _next) => {
  if (error.status) {
    const errBody = { ...error, message: error.message };
    response.status(error.status).json(errBody);
  } else {
    response.status(500).json({ message: 'Internal Server Error' });
    if (error.name !== 'FakeError') console.log(error);
  }
});

function runServer(port = SERVER_PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', (error) => {
      console.error('Express failed to start');
      console.error(error);
    });
}

if (require.main === module) {
  runServer();
}

module.exports = app;
