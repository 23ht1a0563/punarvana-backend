const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const plantRoutes = require('./routes/plants');
app.use('/api/auth', authRoutes);
app.use('/api/plants', plantRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

app.listen(process.env.PORT, () => 
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);