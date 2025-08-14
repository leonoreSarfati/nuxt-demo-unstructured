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
          <component
              :is="IconEye"
              :class="['icon', isActive('watched', movie.id) ? 'icon-watched' : 'text-white']"
              @click="addToList($event,'watched', movie.id)"
          />
          <component
              :is="IconHeart"
              :class="['icon', isActive('favorite', movie.id) ? 'icon-liked' : 'text-white']"
              @click="addToList($event,'favorite', movie.id)"
          />
          <component
              :is="IconClock"
              :class="['icon', isActive('watchlist', movie.id) ? 'icon-clock' : 'text-white']"
              @click="addToList($event,'watchlist', movie.id)"
          />
        </div>
      </div>
    </div>

    <section class="reviews-section">
      <h2>Reviews</h2>
      
      <div v-if="reviews.length">
        <!-- <ReviewItem
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        /> -->

        <div v-for="review in reviews" class="review-card">
          <div class="review-header">
            <div class="medium-title">{{ review.userId }}</div>
            <div class="review-stars">
              <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= review.rating }">
              ★
              </span>

            </div>
          </div>
          <p v-if="review.comment" class="small-text">{{ review.comment }}</p>
          <div class="review-date">{{ formatDate(review.createdAt) }}</div>
        </div>

        
      </div>
      <p v-else class="text-gray-500 italic">Aucun avis pour ce film pour le moment.</p>

    </section>
  </div>
</template>

<script setup lang="ts">
import * as HeroIcons from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { moviesData } from '~/data/movies'
import { reviewsData } from '~/data/reviews'


const movie = ref(null)
const route = useRoute()


const reviews = ref([])

onMounted(async () => {
  const id = Number(route.params.id)
  movie.value = await getMovieById(id)
  reviews.value = await getReviewsByMovieId(id)
})

const IconHeart = HeroIcons["HeartIcon"] || null
const IconEye = HeroIcons["EyeIcon"] || null
const IconClock = HeroIcons["ClockIcon"] || null
const userStore = useUserStore()


const isActive = (activeClass, movieId) => {
  if (activeClass === 'watched') {
    return userStore.user.watchedMovies.includes(movieId)
  } else if (activeClass === 'favorite') {
    return userStore.user.favoriteMovies.includes(movieId)
  }
  else if (activeClass === 'watchlist') {
    return userStore.user.watchlist.includes(movieId)
  }
  return false
}

const addToList = (event: MouseEvent, activeClass, movieId) => {
    event.stopPropagation();
  if (activeClass === 'watched') {
    userStore.addToWatched(movieId)
  } else if (activeClass === 'favorite') {
    userStore.addToFavorite(movieId)
  }
  else if (activeClass === 'watchlist') {
    userStore.addToWatchlist(movieId)
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getMovieById = async (id) => {
    return moviesData.find((movie) => movie.id === id) || null
  }

const getReviewsByMovieId = (movieId: number) => {
    return reviewsData.filter(review => review.movieId === movieId)
  }
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

.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;
}
.icon:hover {
  transform: scale(1.2);
}

.icon-liked {
  color: #ef4444;
}

.icon-watched {
  color: #22c55e;
}
.icon-clock {
  color: #f59e0b;
}
.review-card {
  background-color: #1D1D1D; 
  border-radius: 12px;       
  padding: 16px;            
  margin-bottom: 16px;      
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  border: 1px solid #1D1D1D; 
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.small-text {
  font-size: 14px;
  font-weight: normal;
  color: #FFFFFFB2;
}

.review-date {
  font-size: 0.75rem; /* 12px */
  color: #6b7280; /* gris clair */
}

.review-stars {
  display: flex;
  gap: 4px;
  color: #fbbf24; /* jaune doré */
}

</style>
