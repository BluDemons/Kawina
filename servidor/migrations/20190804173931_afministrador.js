
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('admi', function(table){
            table.increments('id').primary();
            table.string('usuario');
            table.string('contrasena');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('admi'),
      ])
  };
  