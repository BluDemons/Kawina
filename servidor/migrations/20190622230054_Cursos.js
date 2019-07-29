
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('cursos', function(table){
            table.increments('id').primary();
            table.string('nombre');
            table.decimal('precio');
            table.integer('idServicio').references('id').inTable('servicios');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('cursos'),
      ])
  };
  