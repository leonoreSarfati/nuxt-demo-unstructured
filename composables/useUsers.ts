import type { User } from "~/types/user"
import { users } from "~/data/users" 

export const useUsers = () => {
  const getUserById = async (id: number): Promise<User | null> => {
    const user = users.find(u => u.id === id)
    return user ?? null
  }

  const getUserByUsername = async (username: string): Promise<User | null> => {
    const user = users.find(u => u.username === username)
    return user ?? null
  }

  const createUser = async (newUser: Partial<User>): Promise<User | null> => {
    const id = Math.max(...users.map(u => u.id)) + 1
    const user: User = {
      id,
      username: newUser.username ?? `user${id}`,
      favoriteMovies: [],
      watchedMovies: [],
    }
    users.push(user)
    return user
  }

  const addFavorite = async (userId: number, movieId: number): Promise<User | null> => {
    const user = users.find(u => u.id === userId)
    if (!user) return null
    if (!user.favoriteMovies.includes(movieId)) {
      user.favoriteMovies.push(movieId)
    } else {
      user.favoriteMovies = user.favoriteMovies.filter(id => id !== movieId)
    }
    return user
  }

  const updateFavorites = async (userId: number, favorites: number[]): Promise<User | null> => {
    const user = users.find(u => u.id === userId)
    if (!user) return null
    user.favoriteMovies = favorites
    return user
  }

  return {
    getUserById,
    getUserByUsername,
    createUser,
    updateFavorites,
    addFavorite
  }
}
