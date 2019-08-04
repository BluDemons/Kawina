
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('productos', function(table){
        table.increments('id').primary();
        table.string('nombre');
        table.string('descripcion');
        table.decimal('precio');
        table.text('imagen');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('productos'),
    ])
};
