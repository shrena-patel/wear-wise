export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, clerk_id: 'user_2hWnJmuGX2ghNtpmPQYUEcagb3r', name: 'Shrena', email: 'shrena@test.com', phone: '0218932929', profile_image: '/images/test.jpg'}
  ])
}
