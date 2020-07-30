const express = require('express');
const { PORT } = require('../config');
const app = express();

// Router

app.listen(PORT, () => {
  console.log("app it's on");
});
