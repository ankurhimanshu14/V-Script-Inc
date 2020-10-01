require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;
const cors = require('cors');
const app = express();

const v1Routes = require('./routes/v1');


app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1', v1Routes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/`);
});