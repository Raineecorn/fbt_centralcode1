const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/flashbox/api/tracker', require('./routes/tracker/app'));
app.use('/flashbox/api/entry', require('./routes/entry/app'));
app.use('/flashbox/api/account', require('./routes/identification/app'));

app.get('/flashbox/api/version', (req, res) => {
    res.json({ version: "2024.11.020" });
});

// 404 Fallback
app.use((req, res) => {
    res.status(404).send('Cannot Find Route');
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
