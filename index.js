const express = require('express');
const app = express();
const usersRoutes = require('./users');
require('dotenv').config();

app.use(express.json());

app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});