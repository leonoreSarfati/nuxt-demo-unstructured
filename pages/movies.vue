<template>
  <div class="movies-page">


    <div class="search-wrapper">
  <ElementSearchBar v-model="searchQuery" />
</div>

    <div class="filter-wrapper">

      <ElementFilter
        :data="availableGenres"
        v-model:selectedData="selectedGenre"
        label="Genre"
      />
    </div>

    <div class="movies-grid">
      <MovieCard
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMovies } from '~/composables/useMovies'


import type { Movie } from '~/types/movie'

const searchQuery = ref('')
const selectedGenre = ref<string | null>(null)

const { getAllMovies } = useMovies()
const movies = ref<Movie[]|null>([])
onMounted(async () => {
  movies.value = await getAllMovies()
})

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
  border: 1px solid var(--primary);
  padding: 0.3rem 0.8rem;
  background-color: #111;
  color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.filter-wrapper Filter:hover {
  border-color: var(--primary);
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem;
}

</style>
