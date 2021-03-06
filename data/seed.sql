INSERT INTO books (author, title, isbn, image_url, description) VALUES ('Frank Herbert', 'Dune', 'ISBN_13 9780441013593', 'http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 'Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.') RETURNING *;

INSERT INTO books (author, title, isbn, image_url, description) VALUES ('Frank Herbert', 'Dune Messiah', '0441015611', 'http://books.google.com/books/content?id=RHIiCLH6n3gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api', 'The sisterhood of the Bene Gesserit plots to seize control of the galaxy-wide empire of their supernatural leader, while on Arrakis, the Maud dib, the heir to an unimaginable power, confronts new challenges.') RETURNING *;