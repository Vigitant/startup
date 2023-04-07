const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('quintus').collection('user');
//const scoreCollection = client.db('simon').collection('score');

function getUser(x) {
  return userCollection.findOne({ name: x });
}

function getUserByToken(t) {
  return userCollection.findOne({ token: t });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

let solvedNums = [];                      //each logged in user will need one

function checkNum(randNum) {              //run this for logged in users before printing
  while(solvedNums.includes(randNum)) {
    randNum++;
  }
  return randNum;
}

function addNum(newNum) {                 //run whenever math checks out
  solvedNums.push(newNum);
}