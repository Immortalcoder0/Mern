const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: true
}));
//login page
app.get('/login', (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required />
            <br><br>
            <input type="password" name="password" placeholder="Password" required />
            <br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Handle login POST
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        req.session.user = { username };
        res.redirect('/dashboard');
    } else {
        res.send('Please provide username and password');
    }
});

// Dashboard - protected route
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`
            <h2>Welcome, ${req.session.user.username}!</h2>
            <p>You are logged in.</p>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send('<h2>Please <a href="/login">login</a> first.</h2>');
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('<h2>Logged out successfully!</h2><a href="/login">Login again</a>');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 