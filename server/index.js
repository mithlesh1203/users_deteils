
// const dotenv = require('dotenv');
const express = require('express');
var cors = require('cors')
const conn = require('./db/conn')
const app = express();
const User = require('./models/userSchema');
// dotenv.config({ path: './config.env' });
const PORT = (process.env.PORT || 5000);
const { request } = require('express');
const multer  = require('multer')

app.use(express.json());
app.use(cors())


app.post('/register', async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  res.send(result);
});

app.post('/login', async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send('Users not Found');
    }
  } else {
    res.send('please enter email and password');
  }
});


app.get('/get-users', async (req, res) => {

  const productData = await User.aggregate([
    { $sort : { name : 1 } },
  ]);
  if (productData.length) {
    res.send(productData)
  } else {
    res.send('Product Not Found')
  }
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})