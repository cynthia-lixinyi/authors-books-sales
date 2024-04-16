exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('authors').del();
  await knex('books').del();
  await knex('sale_items').del();

  // Insert data into 'authors' table
  await knex('authors').insert([
    {"author_name": "John Smith", "email": "john@example.com", "date_of_birth": "1980-05-15"},
    {"author_name": "Jane Doe", "email": "jane@example.com", "date_of_birth": "1975-10-20"},
    {"author_name": "Alice Johnson", "email": "alice@example.com", "date_of_birth": "1992-03-08"},
    {"author_name": "Michael Brown", "email": "michael@example.com", "date_of_birth": "1982-08-12"},
    {"author_name": "Emily Wilson", "email": "emily@example.com", "date_of_birth": "1995-02-28"},
    {"author_name": "David Lee", "email": "david@example.com", "date_of_birth": "1978-11-18"},
    {"author_name": "Jessica Martinez", "email": "jessica@example.com", "date_of_birth": "1984-06-25"},
    {"author_name": "Daniel Taylor", "email": "daniel@example.com", "date_of_birth": "1990-09-03"},
    {"author_name": "Olivia Anderson", "email": "olivia@example.com", "date_of_birth": "1987-04-17"},
    {"author_name": "William Clark", "email": "william@example.com", "date_of_birth": "1983-12-09"},
    {"author_name": "Sophia Thomas", "email": "sophia@example.com", "date_of_birth": "1991-07-11"},
    {"author_name": "Alexander White", "email": "alexander@example.com", "date_of_birth": "1976-01-30"},
    {"author_name": "Emma Rodriguez", "email": "emma@example.com", "date_of_birth": "1989-10-05"},
    {"author_name": "James Harris", "email": "james@example.com", "date_of_birth": "1981-03-20"},
    {"author_name": "Mia King", "email": "mia@example.com", "date_of_birth": "1993-06-14"},
    {"author_name": "Benjamin Martinez", "email": "benjamin@example.com", "date_of_birth": "1986-12-01"},
    {"author_name": "Charlotte Carter", "email": "charlotte@example.com", "date_of_birth": "1980-09-28"},
    {"author_name": "Logan Thompson", "email": "logan@example.com", "date_of_birth": "1977-05-23"},
    {"author_name": "Amelia Adams", "email": "amelia@example.com", "date_of_birth": "1994-02-18"},
    {"author_name": "Henry Garcia", "email": "henry@example.com", "date_of_birth": "1988-08-07"},
  ]);

  // Insert data into 'books' table
  await knex('books').insert([
    {"author_id": 1, "isbn": "978-1-56619-909-4"},
    {"author_id": 2, "isbn": "978-3-16-148410-0"},
    {"author_id": 3, "isbn": "978-0-399-17725-4"},
    {"author_id": 4, "isbn": "978-1-84614-237-1"},
    {"author_id": 5, "isbn": "978-3-16-148411-0"},
    {"author_id": 6, "isbn": "978-0-399-17726-1"},
    {"author_id": 7, "isbn": "978-1-56619-910-0"},
    {"author_id": 8, "isbn": "978-3-16-148412-0"},
    {"author_id": 9, "isbn": "978-0-399-17727-2"},
    {"author_id": 10, "isbn": "978-1-56619-911-7"},
    {"author_id": 11, "isbn": "978-3-16-148413-0"},
    {"author_id": 12, "isbn": "978-0-399-17728-9"},
    {"author_id": 13, "isbn": "978-1-56619-912-4"},
    {"author_id": 14, "isbn": "978-3-16-148414-0"},
    {"author_id": 15, "isbn": "978-0-399-17729-6"},
    {"author_id": 16, "isbn": "978-1-56619-913-1"},
    {"author_id": 17, "isbn": "978-3-16-148415-0"},
    {"author_id": 18, "isbn": "978-0-399-17730-2"},
    {"author_id": 19, "isbn": "978-1-56619-914-8"},
    {"author_id": 20, "isbn": "978-3-16-148416-0"},
  ]);

  // Insert data into 'sale_items' table
  await knex('sale_items').insert([
    {"book_id": 1, "customer_name": "Michael", "item_price": 15.99, "quantity": 1},
    {"book_id": 2, "customer_name": "Emily", "item_price": 12.50, "quantity": 2},
    {"book_id": 3, "customer_name": "Daniel", "item_price": 20.00, "quantity": 1},
    {"book_id": 4, "customer_name": "Sophia", "item_price": 18.75, "quantity": 3},
    {"book_id": 5, "customer_name": "Olivia", "item_price": 22.99, "quantity": 1},
    {"book_id": 6, "customer_name": "William", "item_price": 14.25, "quantity": 2},
    {"book_id": 7, "customer_name": "Emma", "item_price": 16.50, "quantity": 1},
    {"book_id": 8, "customer_name": "Liam", "item_price": 19.99, "quantity": 1},
    {"book_id": 9, "customer_name": "Ava", "item_price": 10.50, "quantity": 2},
    {"book_id": 10, "customer_name": "Noah", "item_price": 24.75, "quantity": 1},
    {"book_id": 11, "customer_name": "Isabella", "item_price": 14.99, "quantity": 3},
    {"book_id": 12, "customer_name": "James", "item_price": 16.00, "quantity": 1},
    {"book_id": 13, "customer_name": "Sophia", "item_price": 21.50, "quantity": 2},
    {"book_id": 14, "customer_name": "Mason", "item_price": 19.99, "quantity": 1},
    {"book_id": 15, "customer_name": "Charlotte", "item_price": 18.25, "quantity": 2},
    {"book_id": 16, "customer_name": "Ethan", "item_price": 15.00, "quantity": 1},
    {"book_id": 17, "customer_name": "Amelia", "item_price": 13.75, "quantity": 3},
    {"book_id": 18, "customer_name": "Liam", "item_price": 22.99, "quantity": 1},
    {"book_id": 19, "customer_name": "Olivia", "item_price": 17.50, "quantity": 2},
    {"book_id": 20, "customer_name": "Elijah", "item_price": 20.00, "quantity": 1},
  ]);
};
