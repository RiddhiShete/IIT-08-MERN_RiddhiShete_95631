const express = require('express');

const cryptojs = require('crypto-js');

const jwt = require('jsonwebtoken');

const pool = require('../db/pool');

const result = require('../utils/result');

const config = require('../utils/config');
const e = require('express');

const router = express.Router();


//SignUp

router.post('/signup', (req, res) => {
    const {name, email, password, mobile} = req.body;
    const sql = `insert into users (name, email, password, mobile) values (?, ?, ?, ?)`;
    const hashedPassword = cryptojs.SHA256(password).toString();
    pool.query(sql, [name, email, hashedPassword, mobile], (err, data) => {
        res.send(result.createResult(err, data));
    });
});

//SignIn

router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    const sql = `select * from users where email = ? and password = ?`;
    const hashedPassword = cryptojs.SHA256(password).toString();
    pool.query(sql, [email, hashedPassword], (err, data) => {
        if (err) {
            res.send(result.createResult(err));
        } else if (data.length == 0) {
            res.send(result.createResult('No user found'));
        } else {
    
            const user = data[0];

            const payload = {
                id: user.id,
                email: user.email,
            };      

            const token = jwt.sign(payload, config.SECRET);

            const userData = {
                name: user.name,
                mobile: user.mobile,
                token : token,
            };

            res.send(result.createResult(null, userData));
        }       
    });
});

router.get("/", (req, res) => {
    const {email} = req.query;
    const sql = `select * from users where email = ?`;
    pool.query(sql, [email], (err, data) => {
        res.send(result.createResult(err, data));
    });
});
module.exports = router;