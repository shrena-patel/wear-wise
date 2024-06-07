export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary()
    table.string('clerk_id')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('profile_image')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
