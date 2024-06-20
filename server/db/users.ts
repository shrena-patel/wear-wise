import connection from './connection.ts'
import { UserData, User } from '../../models/users.ts'

export async function getAllUsers(db = connection): Promise<User[]> {
  return db('users').select()
}

export async function addUser(user: UserData, db = connection) {
  return db('users').insert(user)
}