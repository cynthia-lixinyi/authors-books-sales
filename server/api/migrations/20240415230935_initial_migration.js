exports.up = async knex => {
  await knex.schema.createTable('authors', table => {
    table.increments('id').primary();
    table.text('author_name');
    table.text('email');
    table.timestamp('date_of_birth');
  });

  await knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.integer('author_id').references('id').inTable('authors').notNull().onDelete('cascade');
    table.text('isbn');
  });

  await knex.schema.createTable('sale_items', table => {
    table.increments('id').primary();
    table.integer('book_id').references('id').inTable('books').notNull().onDelete('cascade');
    table.text('customer_name');
    table.decimal('item_price');
    table.integer('quantity');
  });
};


exports.down = async knex => {
  await knex.schema
    .dropTableIfExists('sale_items')
    .dropTableIfExists('books')
    .dropTableIfExists('authors')
};
