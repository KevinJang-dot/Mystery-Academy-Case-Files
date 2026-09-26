const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Mystery Academy: Case Files API is running!"
    });
});

// Test API route
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend connection is working!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});