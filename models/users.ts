export interface User extends UserData {
  id: number
}

export interface UserData {
  clerk_id: string | undefined
  name: string | null | undefined
  email: string | undefined
  profile_image: string | undefined
}

