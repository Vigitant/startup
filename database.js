const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

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