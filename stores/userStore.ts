// stores/user.ts
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} ,
  }),

  actions: {
    setUser(user) {
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
      

      if (this.user.favoriteMovies.includes(movieId)) {
        this.user.favoriteMovies = this.user.favoriteMovies.filter(id => id !== movieId)
      } else {
        this.user.favoriteMovies.push(movieId)
      }

      
    },

    async addToWatchlist(movieId: number) {
      if (this.user.watchlist.includes(movieId)) {
        this.user.watchlist = this.user.watchlist.filter(id => id !== movieId)
      } else {
        this.user.watchlist.push(movieId)
      }
    }
  },
})
