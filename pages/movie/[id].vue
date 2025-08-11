<template>
  <div class="movie-detail">
    <div class="movie-main">
      <img
        v-if="movie"
        :src="movie.posterUrl"
        :alt="movie.title"
        class="movie-poster"
      />
      <div class="movie-info" v-if="movie">
        <h1>{{ movie.title }}</h1>
        <p><strong>Description:</strong> {{ movie.description }}</p>
        <p><strong>Genre:</strong> {{ movie.genres.join(', ') }}</p>
        <p><strong>Year:</strong> {{ movie.year }}</p>
        <p><strong>Director:</strong> {{ movie.director }}</p>
        <p><strong>Rating:</strong> {{ movie.rating }}</p>
        <div class="movie-actions">
          <ElementIcon
            icon="EyeIcon"
            :movie-id="movie.id"
            active-class="watched"
          />
          <ElementIcon
            icon="HeartIcon"
            :movie-id="movie.id"
            active-class="favorite"
          />
        </div>
      </div>
    </div>

    <section class="reviews-section">
      <h2>Reviews</h2>
      
      <div v-if="reviews.length">
        <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>
      <p v-else class="text-gray-500 italic">Aucun avis pour ce film pour le moment.</p>

    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import type { Movie } from '~/types/movie'
import type { Review } from '~/types/review'
const { getMovieById } = useMovies()

const movie = ref<Movie | null>(null)
const route = useRoute()

const { getReviewsByMovieId } = useReviews()
const reviews = ref<Review[]>([])

onMounted(async () => {
  const id = Number(route.params.id)
  movie.value = await getMovieById(id)
  reviews.value = await getReviewsByMovieId(id)
})
</script>

<style scoped>
.movie-detail {
  max-width: 900px; /* limite la largeur max */
  margin: 0 auto; /* centre la page */
  padding: 20px; /* espace autour de tout */
  box-sizing: border-box;
}

.movie-main {
  display: flex;
  gap: 24px; /* espace entre image et infos */
  align-items: flex-start;
}

.movie-poster {
  width: 300px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0; /* empêche de rétrécir */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.movie-info {
  flex: 1; /* prend le reste de la place */
}

.movie-info h1 {
  margin-top: 0;
  margin-bottom: 12px;
}

.movie-info p {
  margin: 6px 0;
  line-height: 1.4;
}

.movie-actions {
  display: flex;
  gap: 10px;
  padding: 6px 10px;
}

.reviews-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

.reviews-section h2 {
  margin-bottom: 16px;
}
</style>
