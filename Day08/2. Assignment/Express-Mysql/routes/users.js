// 1.Impoprting
const express = require(`express`)
const pool =  require(`../db/pool`)
const result = require(`../utils/result`)

// 2. Create Router
const router = express.Router();

// 4. Adding Routes

//1. Get all users
router.get("/",  (req, res) => {
    const sql = `select * from users `;
    pool.query(sql, (err, results) => {
        res.send(result.createResult(err,results))
    });
});

// add user
router.post("/", (req, res) => {
    const {first_name, last_name, email, phone}= req.body;
    const sql = `insert into users (first_name, last_name, email, phone) values (?,?,?,?)`;
    pool.query(sql, [first_name, last_name, email, phone], (err, results) => {
        res.send(result.createResult(err,results))
    });
});

//Export Router
module.exports = router;    