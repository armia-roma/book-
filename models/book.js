class Book {
    id = null;
    title = null;
    author_id = null;
    year = null;
    category_id = null;    

    constructor( id ,title, author_id, year, category_id ) {
        this.id = id 
        this.title = title;
        this.author_id = author_id;
        this.year = year;
        this.category_id = category_id;
    }

}

module.exports = Book;
// encapsulation
// abstraction 
// inheritance
// polymorphism
// let encapsulation = "we group related variables and function that operate on them into objects"
// procedural  