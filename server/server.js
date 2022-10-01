const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cityRouter = require('./routes/cityRouter');
const authRouter = require('./routes/authRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/city', cityRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
