const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());    
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Express Session App');
});

// Set session data
app.get('/login', (req, res) => {
    req.session.user = { name: 'Pritam', role: 'student' };
    res.send('Session data set! You are logged in.');
});

// Get session data
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user.name}, Role: ${req.session.user.role}`);
    } else {
        res.send('Please login first. Visit /login');
    }
});

// Destroy session
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.send('Error logging out');
        } else {
            res.send('Logged out successfully!');
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});