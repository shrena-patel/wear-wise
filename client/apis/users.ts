import request from 'superagent'
import { UserData } from '../../models/users'

const rootUrl = '/api/v1'

export function addUser(user: UserData): Promise<string[]> {
  return request.get(rootUrl + '/users').send(user).then((res) => {
    return res.body.fruits
  })
}
