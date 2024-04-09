const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import auth routes

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', authRoutes); // Use auth routes with the /api prefix

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://henegarcodes:Leishy415@cluster0.zkkehjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



