// NPM dependencies
import mongoose from 'mongoose';

const CONNECTION_STRING = 'mongodb://localhost/coady-me';

mongoose.Promise = global.Promise;

mongoose.connect(CONNECTION_STRING);

mongoose.connection.on('error', console.error.bind(console, 'connection error'));

mongoose.connection.on('open', () => {
  console.log('database connection established');
});
