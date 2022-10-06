const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { login, email, password } = req.body;
  console.log(login, email, password);
  if (email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { login, password: await bcrypt.hash(password, 10), avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjEw5JZ9OZd3xQx6bd2ENSgMnACsS7xt2Rw&usqp=CAU' },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        req.session.userId = sessionUser.id;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        req.session.userId = sessionUser.id;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

authRouter.post('/check', (req, res) => {
  if (req.session?.user) {
    return res.json(req.session?.user);
  }
  return res.sendStatus(401);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = authRouter;
