<template>
  <div class="movie-card" @mouseover="hover = true" @mouseleave="hover = false" @click="goToDetail">
    <img :src="movie.posterUrl" :alt="movie.title" class="movie-poster" />
    <div class="movie-title">{{ movie.title }}</div>

    <div class="movie-actions" v-if="hover">
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
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import type { Movie } from '~/types/movie'
import { useUserStore } from '~/stores/userStore'

const props = defineProps<{ movie: Movie }>()
const hover = ref(false)


const router = useRouter()
const goToDetail = () => {
  router.push(`/movie/${props.movie.id}`)
}
</script>

<style scoped>
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
.movie-actions {
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
}


</style>
