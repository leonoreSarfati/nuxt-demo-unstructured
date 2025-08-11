<template>
  <div class="filters">
    <label class="small-text" for="genre-select">{{label}}</label>
    <select id="genre-select" :value="selectedData" @change="$emit('update:selectedData', ($event.target as HTMLInputElement)?.value)">
      <option value="">Tous</option>
      <option v-for="genre in data" :key="genre" :value="genre">
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string[]
  selectedData: string | null
  label?: string
}>()

defineEmits(['update:selectedData'])
</script>

<style scoped>
.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
select {
  padding: 0.5rem;
  border-radius: 6px;
}
</style>
