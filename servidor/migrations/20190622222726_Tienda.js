
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('tienda', function(table){
          table.increments('id').primary();
          table.integer('idProducto').references('id').inTable('productos');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tienda'),
    ])
};
