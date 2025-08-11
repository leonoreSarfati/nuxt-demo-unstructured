import { reviews } from '~/data/reviews'
import type { Review } from '~/types/review'

export const useReviews = () => {
  const allReviews = ref<Review[]>([...reviews])

  const getReviewsByMovieId = (movieId: number) => {
    return allReviews.value.filter(review => review.movieId === movieId)
  }

  const getReviewsByUserId = (userId: number) => {
    return allReviews.value.filter(review => review.userId === userId)
  }

  const addReview = (review: Omit<Review, 'id' | 'createdAt'>) => {
    const newReview: Review = {
      ...review,
      id: allReviews.value.length + 1,
      createdAt: new Date().toISOString()
    }
    allReviews.value.push(newReview)
  }

  return {
    reviews: allReviews,
    getReviewsByMovieId,
    getReviewsByUserId,
    addReview
  }
}
