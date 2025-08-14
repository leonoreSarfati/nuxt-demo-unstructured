<template>
  <div class="movies-page">


    <div class="search-wrapper">
    <input
      v-model="searchQuery"
      type="text"
      class="search-bar small-text"
      placeholder="Rechercher un film..."
      
    />
</div>

    <div class="filter-wrapper">

      <div class="filters">
        <label class="small-text" for="genre-select">Genre</label>
        <select id="genre-select" v-model="selectedGenre" >
          <option value="">Tous</option>
          <option v-for="genre in availableGenres" :key="genre" :value="genre">
            {{ genre }}
          </option>
        </select>
      </div>
    </div>

    <div class="movies-grid">
      <div  v-for="movie in filteredMovies" 
      :key="movie.id" 
      class="movie-card" 
      @click="goToDetail(movie)">
        <img :src="movie.posterUrl" :alt="movie.title" class="movie-poster" />
        <div class="movie-title">{{ movie.title }}</div>

        <div class="movie-actions" >
          
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

      <!-- <div  v-for="movie in filteredMovies" 
      :key="movie.id" 
      class="movie-card" 
      @mouseover="hover = movie.id"
      @mouseleave="hover = null" @click="goToDetail(movie)">
        <img :src="movie.posterUrl" :alt="movie.title" class="movie-poster" />
        <div class="movie-title">{{ movie.title }}</div>

        <div class="movie-actions" v-if="hover">
          
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
          
        </div>
      </div> -->

    </div>
  </div>
</template>

<script setup lang="ts">
import * as HeroIcons from '@heroicons/vue/24/solid'
import { ref, computed } from 'vue'
import { moviesData } from '~/data/movies'



import type { Movie } from '~/types/movie'

const searchQuery = ref('')
const selectedGenre = ref<string | null>(null)


const movies = ref([])
onMounted(async () => {
  movies.value = await getAllMovies()
})

const getAllMovies = async (genre) => {
    if (!genre) return moviesData
    return moviesData.filter((movie) => movie.genres.includes(genre))
  }

const availableGenres = computed(() =>
  [...new Set(movies.value?.flatMap(m => m.genres) ?? [])]
)

const filteredMovies = computed(() => {
  return movies.value?.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesGenre = selectedGenre.value ? movie.genres.includes(selectedGenre.value) : true
    return matchesSearch && matchesGenre
  }) ?? []
})

const hover = ref(1)
const router = useRouter()
const goToDetail = (movie) => {
  console.log('Navigating to movie detail:', movie)
  router.push(`/movie/${movie.id}`)
}

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


</script>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}



.search-wrapper {
  max-width: 400px;
  margin: 0 auto;
}

.filter-wrapper {
  max-width: 400px;
  margin: 1rem auto 0;
  display: flex;
  flex-direction: column;
}

.filter-label {
  font-size: 0.8rem;
  color: #ccc;
  margin-bottom: 0.3rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

/* Adapte ce style selon la structure de ton composant Filter */
.filter-wrapper Filter {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #FD43A0;
  padding: 0.3rem 0.8rem;
  background-color: #111;
  color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.filter-wrapper Filter:hover {
  border-color: #FD43A0;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem;
}

.search-bar {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
select {
  padding: 0.5rem;
  border-radius: 6px;
}

.movie-card {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s;
}
.movie-card:hover {
  transform: scale(1.03);
}
.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie-title {
  position: absolute;
  top: 8px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
}
/* .movie-actions {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  backdrop-filter: blur(4px);
} */

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
.movie-actions {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 6px);
  display: flex;
  gap: 10px;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease, transform .2s ease;
}

.movie-card:hover .movie-actions {
  opacity: 1;
  transform: translate(-50%, 0);
  pointer-events: auto;
}

.small-text {
  font-size: 14px;
  font-weight: normal;
  color: var(--medium-light);
}

input {
  background-color: #1D1D1D; /* ou une couleur hex comme #1D1D1D */
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  outline: none;
}
</style>
