import request from 'superagent'
import { Items } from '../../models/items'

const rootUrl = '/api/v1'

export function getItemsByUser(id: string): Promise<Items[]> {
  return request.get(rootUrl + '/items/' + id).then(res => {
    return res.body
  })
}
