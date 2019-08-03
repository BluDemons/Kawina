
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('patronajes', function(table){
            table.increments('id');
            table.string('nombre');
            table.decimal('precio');
            table.string('descripcion');
            table.string('urlArchivo');
            table.binary('imagen');
            table.integer('idServicio').references('id').inTable('servicios');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('patronajes'),
      ])
  };