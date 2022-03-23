const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { untukError } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

// connect mongo
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello ini dari backend' });
});

//Routernya
app.use('/api/users', require('./routes/userRoutes'));
app.use(untukError);
app.listen(PORT, () => console.log(`Server diPort ${PORT}`));
