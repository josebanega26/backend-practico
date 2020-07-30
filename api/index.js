const express = require('express');
const { PORT } = require('../config');
const userRouter = require('../api/components/user/network');
const app = express();

// Router

app.use('/api/user', userRouter);
app.use('', (req, res, next) => {
  res.json({
    message: 'ERROR',
  });
});

app.listen(PORT, () => {
  console.log("app it's on");
});
