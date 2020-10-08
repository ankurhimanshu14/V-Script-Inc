require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = process.env.PORT;
const cors = require('cors');
const app = express();

const v1Routes = require('./routes/v1');


app.use(cookieParser());
app.use(cors({origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'ThisIsNotSafe',
  resave: true,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  const allowedOrigin = 'http://localhost:3000';
  
  if(allowedOrigin === req.headers.origin) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type', 'Access-Control-Allow-Origin', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }

  next();
});

app.use('/api/v1', v1Routes)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
});