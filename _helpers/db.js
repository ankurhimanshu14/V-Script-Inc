require('dotenv').config();
const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI;

const dbOptions = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
};

mongoose.connect(dbUri, dbOptions);
mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('Mongoose connected.');
});

conn.on('error', (e) => {
    console.log('Mongoose error: ' + e);
});

conn.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    conn.close(() => {
        console.log('Mongoose disconnected through app termination.');
        process.exit(0);
    });
});

module.exports = mongoose.Schema;