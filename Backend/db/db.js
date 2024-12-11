const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log('Connected to db!');
  } catch (err) {
    console.error('Failed to connect to db:', err);
  }
}

module.exports = connectToDb;
