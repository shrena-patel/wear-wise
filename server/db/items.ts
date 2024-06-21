import connection from './connection.ts'
import { Item } from '../../models/items.ts'

export async function getAllItemsById(id, db = connection): Promise<Item[]> {
  return db('items').where('clerk_id', id).select()
}

