const mysql = require('mysql');
const Book = require('../models/book');
const connection = require('./../connection')
const save = (book) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO books (title, author_id, year, category_id) VALUES (?, ?, ?, ?)`;
        connection.query(sql, [book.title, book.author_id, book.year, book.category_id], (err, result) => {
            if(err) reject(err);
            book.id = result.insertId;
            resolve(book);
        });
    })
}
const getAll = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM books'
        connection.query(sql, (err, result) => {
            if(err) return reject(err)
            return resolve(
                result.map(
                    (row) => new Book(row.id, row.title, row.author_id, row.year, row.category_id)
                )
            )
            
        })
    })
}
const getById = (id) => {
    return new Promise( (resolve, reject) => {
        const sql = `SELECT * FROM books WHERE id = ${id} `
        connection.query(sql, (err, result) => {
            if(err) reject(err)
            if(!result) return reject('internal server error')
            if(result.length > 0){
                let record = result[0]
                resolve(new Book(record.id, record.title, record.author_id, record.year, record.category_id))
            } else {
                resolve(result)
            }
        })
    })
}
const update = (id, record) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE books SET title = ?, author_id = ?, year = ?, category_id = ? WHERE id = ?`
        connection.query(sql,[record.title, record.author_id, record.year, record.category_id, id],(err, result) => {
            if(err) reject(err)
            resolve(new Book(record.id, record.title, record.author_id, record.year, record.category_id))
        })
    })
}
const remove = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM books WHERE id = ${id};`
        connection.query(sql, (err, result) => {
            if(err) reject(err)
            resolve(result)
        })
    })
}
module.exports = { save, getAll, getById, update, remove}
