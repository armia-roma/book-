BEGIN;

DROP TABLE books;

DELETE FROM migrations where name = '202110232031_create_books_table';
COMMIT;