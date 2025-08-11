import { movies } from '~/data/movies'
import type { Movie } from '~/types/movie'

export const useMovies = () => {

  const getAllMovies = async (genre?: string): Promise<Movie[]> => {
    if (!genre) return movies
    return movies.filter((movie) => movie.genres.includes(genre))
  }

  const getMovieById = async (id: number): Promise<Movie | null> => {
    return movies.find((movie) => movie.id === id) || null
  }

  const searchMovies = async (title: string): Promise<Movie[]> => {
    const lowerTitle = title.toLowerCase()
    return movies.filter((movie) => movie.title.toLowerCase().includes(lowerTitle))
  }

  const getTopRated = async (): Promise<Movie[]> => {
    return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10)
  }

  const getByDirector = async (name: string): Promise<Movie[]> => {
    const lowerName = name.toLowerCase()
    return movies.filter((movie) => movie.director.toLowerCase().includes(lowerName))
  }

  return {
    getAllMovies,
    getMovieById,
    searchMovies,
    getTopRated,
    getByDirector,
  }
}
