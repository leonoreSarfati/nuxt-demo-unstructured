// stores/user.ts
import { defineStore } from 'pinia'
import type { User } from '~/types/user'
import { useUsers } from '~/composables/useUsers'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User,
  }),

  actions: {
    setUser(user: User) {
      this.user = user
    },

    addToWatched(movieId: number) {
      if (this.user.watchedMovies.includes(movieId)) {
        this.user.watchedMovies = this.user.watchedMovies.filter(id => id !== movieId)
      } else {
        this.user.watchedMovies.push(movieId)
      }
    },

    async addToFavorite(movieId: number) {
      const usersApi = useUsers()

      if (this.user.favoriteMovies.includes(movieId)) {
        this.user.favoriteMovies = this.user.favoriteMovies.filter(id => id !== movieId)
      } else {
        this.user.favoriteMovies.push(movieId)
      }

      await usersApi.addFavorite(this.user.id, movieId)
    },
  },
})
