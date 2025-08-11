<template>
    <component
        :is="IconComponent"
        :class="['icon', isActive ? activeClass : 'text-white']"
        @click="addToList"
    />
</template>

<script setup lang="ts">
import * as HeroIcons from '@heroicons/vue/24/solid'
const props = defineProps<{
  icon: keyof typeof HeroIcons
  movieId: number
  activeClass?: string
}>()

const IconComponent = HeroIcons[props.icon] || null

const userStore = useUserStore()


const isActive = computed(() => {
  if (props.activeClass === 'watched') {
    return userStore.user.watchedMovies.includes(props.movieId)
  } else if (props.activeClass === 'favorite') {
    return userStore.user.favoriteMovies.includes(props.movieId)
  }
  return false
})

const addToList = (event: MouseEvent) => {
    event.stopPropagation();
  if (props.activeClass === 'watched') {
    userStore.addToWatched(props.movieId)
  } else if (props.activeClass === 'favorite') {
    userStore.addToFavorite(props.movieId)
  }
}

// Classe CSS à appliquer quand actif
const activeClass = computed(() => {
  const classMap: Record<string, string> = {
    HeartIcon: 'icon-liked',
    EyeIcon: 'icon-watched',
  }

  return classMap[props.icon] ?? 'text-primary'
})

</script>

<style scoped>

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
</style>