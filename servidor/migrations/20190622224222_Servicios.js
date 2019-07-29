
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('servicios', function(table){
          table.increments('id');
          table.string('nombre');
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('servicios'),
    ])
};
