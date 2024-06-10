import request from 'superagent'
import { UserData } from '../../models/users'

const rootUrl = '/api/v1'

export function addUser(user: UserData): Promise<string[]> {
  console.log(user, 'user in client api')
  return request.post(rootUrl + '/users').send(user).then((res) => {
    return res.body
  })
}
