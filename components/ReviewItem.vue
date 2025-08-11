<template>
  <div class="review-card">
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
</template>

<script setup lang="ts">
import type { Review } from '~/types/review'

const props = defineProps<{
  review: Review
}>()

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.review-card {
  background-color: var(--medium); 
  border-radius: 12px;       
  padding: 16px;            
  margin-bottom: 16px;      
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  border: 1px solid var(--medium); 
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
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
