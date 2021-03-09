require('dotenv').config();
const express = require('express'),
    userCtrl = require('./controllers/user'),
    massive = require('massive'),
    session = require('express-session')


const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    })
)
    
//Massive ALWAYS follows use and is ALWAYS before Endpoints
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}) .then((db) => {
    app.set('db', db)
    console.log('db connected')
}) .catch((err) => console.log(err))


//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Search Endpoints



app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})