const express = require('express');
const cors = require('cors')
const app = express();
// const connection = require('./connection');
const Book = require('./models/book');
const bookRepo = require('./repos/book')
app.use(express.json());
app.use(cors())
app.post('/book', async(req, res) => {
    const book = new Book(null, req.body.title, req.body.author_id, req.body.year, req.body.category_id)
    try{
        const book = await bookRepo.save(
            new Book(null, req.body.title, req.body.author_id, req.body.year, req.body.category_id)
        );
        res.json({
            message : 'book created',
            record : book
        })
    } catch(err) {
        res.status(400).send(err)
    }
})
app.get('/book', async (req, res) => {
    try{
        const book = await bookRepo.getAll()
        res.json({
            book
        })
    } catch(err) {
        res.status(400).send({ message: err })
    }
})
app.get('/book/:id', async (req, res) => {
    try{
        let book = await bookRepo.getById(req.params.id)
        if(!book) res.status(404).send({
            message : 'book not found'
        });
        res.send({
            book 
        })
    } catch(err) {
        res.status(400).send(err)
    }   
})
app.put('/book/:id', async (req, res) => {
    try{
       const book = await bookRepo.update (req.params.id, req.body)
       res.json({
           messae: 'Record update',
           record: book 
       })
    } catch(err) {
        res.status(400).send(err)
    }
})
app.delete('/book/:id', async (req, res) => {
    try {
        // const book = await bookRepo.getById(req.params.id)
        // if(!book) return res.status(400).send({
        //     message : 'book not found'
        // })
        const deleteBook = await bookRepo.remove(req.params.id)
        res.send({message : 'book Deleted'})
    } catch(err) {
        res.status(500).send(err)
    }
})
app.listen(9091, () => console.log('app listen in port 9091'))