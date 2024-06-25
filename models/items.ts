export interface Item extends ItemData {
  id: number
}

export interface ItemData {
  clerk_id: string
  name: string
  image: string
  days_worn: number
  cost_per_wear: number
  category_id: number
}