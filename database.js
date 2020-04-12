import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://barstool:T0qLffUuHsNiDFaX@cluster0-r3emj.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('cs');
    console.log('Connected to Database');
    return next();
  } catch (err) {
    throw new Error('Error connecting to Database. Error: ', err)
  }
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
