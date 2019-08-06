
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('tienda', function(table){
          table.increments('id').primary();
              })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tienda'),
    ])
};
