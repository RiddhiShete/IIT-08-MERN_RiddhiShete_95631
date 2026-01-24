const express = require('express');
const pool = require('../db/pool');
const result = require(`../utils/result`);

const router = express.Router();

// Get all students
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM students';
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data));
    });
});


// Add a new student
router.post('/', (req, res) => {
    const { name, email, course } = req.body;
    const sql = 'INSERT INTO students (name, email, course) VALUES (?, ?, ?)';
    pool.query(sql, [name, email, course], (error, data) => {
        res.send(result.createResult(error, data));
    });
});

// Request Parameters

// Update a student
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, course } = req.body;
    const sql = 'UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?';
    pool.query(sql, [name, email, course, id], (error, data) => {
        res.send(result.createResult(error, data));
    });
});

// Delete a student
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM students WHERE id = ?';
    pool.query(sql, [id], (error, data) => {
        res.send(result.createResult(error, data));
    });
});


module.exports = router;