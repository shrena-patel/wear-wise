export interface User extends UserData {
  id: number
}

export interface UserData {
  clerk_id: string
  name: string
  email: string
  // phone: string
  profile_image: string
}

