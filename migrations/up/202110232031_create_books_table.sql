START TRANSACTION;

CREATE TABLE books (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author_id INT(11) NOT NULL,
    year INT(11) NOT NULL,
    category_id INT(11) NOT NULL
);
INSERT INTO migrations (name) VALUES ('202110232031_create_books_table');

COMMIT;