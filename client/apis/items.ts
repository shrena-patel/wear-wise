import request from 'superagent'
import { Item } from '../../models/items'

const rootUrl = '/api/v1'

export function getItemsByUser(id: string): Promise<Item[]> {
  console.log(id, 'id;')
  return request.get(rootUrl + '/items/' + id).then(res => {
    return res.body
  })
}
