// 1.Impoprting
const express = require(`express`)
const pool =  require(`../db/pool`)
const result = require(`../utils/result`)

// 2. Create Router
const router = express.Router();

// 4. Adding Routes

//1. Get all students
router.get("/",  (req, res) => {
    const sql = `select * from students `;
    pool.query(sql, (err, results) => {
        res.send(result.createResult(error,data))
    });
});

// add student
router.post("/", (req, res) => {
    const {name, email,course}= req.body;
    const sql = `insert into students (name, email, course) values (?,?,?)`;
    pool.query(sql, [name, email, course], (err, results) => {
        res.send(result.createResult(error,data))
    });
});

//Export Router
module.exports = router;    