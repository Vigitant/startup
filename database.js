const {MongoClient} = require('mongodb');

const userName = 'Vigitant';
const password = 'Husky2013@1';
const hostname = 'mongodb.com';

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);