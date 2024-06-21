export async function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments().primary()
    table.string('name')
    table.string('image')
    table.integer('days_worn')
    table.float('cost_per_wear')
    table.integer('category_id')
    table.string('clerk_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('items')
}
