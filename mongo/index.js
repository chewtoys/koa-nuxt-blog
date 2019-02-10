import mongoose from 'mongoose';
import config from '../config';

require('./schema/list');

export const database = () => {
  mongoose.set('debug', true);

  mongoose.connect(config.dbPath);

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath);
  });

  mongoose.connection.on('error', err => console.log(err));

  mongoose.connection.on('open', async () => console.log('mongo:', config.dbPath));
}