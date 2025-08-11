export interface Review {
  id: number
  userId: string
  movieId: number
  rating: number // 1 à 5
  comment?: string // optionnel
  createdAt: string // date ISO ex : "2025-07-11T12:00:00Z"
}
