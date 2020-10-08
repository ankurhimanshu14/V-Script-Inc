require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = process.env.PORT;
const cors = require('cors');
const app = express();

const v1Routes = require('./routes/v1');


app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'ThisIsNotSafe',
  resave: true,
  saveUninitialized: true
}))

app.use(function(req, res, next) {
  const allowedOrigin = 'http://localhost:3000';
  
  if(allowedOrigin === req.headers.origin) {
    res.set('Access-Control-Allow-Origin', req.headers.origin)
  } else {
    res.set('Access-Control-Allow-Origin', '*')
  }

  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Accept', 'application/json');
  res.set('Content-Type', 'application/x-www-form-urlencoded');
  res.set('Access-Control-Allow-Credentials', 'true');

  next();

})

app.use('/api/v1', v1Routes)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
});