CREATE TABLE authors (
  id serial PRIMARY KEY,
  author_name text,
  email text,
  date_of_birth timestamp
);

CREATE TABLE books (
  id serial PRIMARY KEY,
  author_id integer REFERENCES authors (id),
  isbn text,
);

CREATE TABLE sale_items (
  id serial PRIMARY KEY,
  book_id integer REFERENCES books (id),
  customer_name text,
  item_price money,
  quantity integer
);

-- 1. Who are the first 10 authors ordered by date_of_birth?
SELECT author_name, date_of_birth
FROM authors
ORDER BY date_of_birth -- default order is ascending i.e. the oldest dates come first and the most recent ones come last
LIMIT 10 -- top 10 oldest authors


-- 2. What is the sales total for the author named “Lorelai Gilmore”?
SELECT si.quantity AS sales_total
FROM sale_items si
JOIN books b ON si.book_id = b.id
JOIN authors a ON b.author_id = a.id
WHERE a.name = "Lorelai Gilmore"


-- 3. Who are the top 10 performing authors, ranked by sales revenue?
SELECT a.id, a.name, SUM(si.quantity * si.item_price) AS sales_revenue
FROM authors a
JOIN books b ON a.id = b.author_id
JOIN sale_items si ON b.id = si.book_id
GROUP BY a.id -- if two authors share the same name
ORDER BY sales_total DESC
LIMIT 10;
