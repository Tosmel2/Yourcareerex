const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const savedPropertyRoutes = require('./routes/savedPropertyRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/properties', propertyRoutes);
app.use('/api/saved-properties', savedPropertyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
