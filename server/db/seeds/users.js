export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Shrena', email: 'shrena@test.com', phone: '0218932929', profile_image: '/images/test.jpg'}
  ])
}
