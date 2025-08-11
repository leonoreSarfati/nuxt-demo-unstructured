export interface User {
  id: number
  username: string // Ex: "john_doe"
  email?: string // Ex: "jA2gk@example.com"
  favoriteMovies: number[] // Liste des IDs de films favoris
  watchedMovies: number[] // Liste des IDs de films vus
}
