<template>
  <button class="base-button small-title" @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Cliquez ici',
  },
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>

<style scoped>
.base-button {
  background-color: var(--primary)!important;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin:8px;
}

.base-button:hover {
  filter: brightness(0.85);
}
</style>
