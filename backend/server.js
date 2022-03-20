const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ pesan: 'Hello ini dari backend' });
});

app.listen(PORT, () => console.log(`Server diPort ${PORT}`));
