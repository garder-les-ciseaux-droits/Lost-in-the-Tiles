// Import Express and CORS
const express = require('express');
const cors = require('cors');
const path = require('path');

// Create the Express app
const app = express();

// Enable CORS for all routes
app.use(cors());  // This will enable CORS for all origins

// Middleware to set required headers for SharedArrayBuffer and WebAssembly
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/engine', express.static('engine'));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
