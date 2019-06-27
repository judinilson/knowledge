
exports.up = function(knex, Promise) {//isso sempre pra ir nas novs versoes do app d bdados
  return knex.schema.createTable('users',table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull().unique()
      table.string('password').notNull()
      table.boolean('admin').notNull().defaultTo(false)
  })
};

exports.down = function(knex, Promise) { //smpre fzendo o contrario feito no up
  return knex.schema.dropTable('users')
};
