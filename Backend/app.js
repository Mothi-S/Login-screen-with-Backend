const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Msmothi1028@',
    database: 'logindb'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ message: 'Error registering user' });
    } else {
        console.log('Connected to MySQL');
    }
});

// Signup Endpoint
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                 console.error('Error executing query:', err); 
            } else {
                res.status(200).json({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ message: 'Error hashing password' });
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ message: 'Error logging in' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

1

app.get('/test', (req, res) => {
    res.send('Backend is connected and working!');
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
