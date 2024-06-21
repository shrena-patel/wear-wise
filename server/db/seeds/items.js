/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('items').del()

  await knex('items').insert([
    {id: 1, name: 'Yu Mei Brown Bag', image: 'test.jpg', days_worn: 8, cost_per_wear: 28.40, category_id: 4, clerk_id: 'user_2iAjUJaAOFUrkWw0FmOjA1hPeTd'}
  ])
}
