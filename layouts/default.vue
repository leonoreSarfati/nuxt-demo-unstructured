<template>
  <div>
    <header class="header">
      <div class="header-left site-title">
        <h1>MovieSpot</h1>
      </div>
      <div class="header-right">
        <button v-if="route.path == '/'" class="base-button small-title" @click="onLogin">
          S'identifier
        </button>
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useFormStore } from '~/stores/useFormStore'

const route = useRoute()
const formStore = useFormStore()

// Function to handle login button click
// This will show the login form by updating the store state
function onLogin() {
  formStore.showLogin()
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  margin:0;
}

.header-left h1 {
  margin: 0;
}

.base-button {
  background-color: #FD43A0;
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

.site-title {
  font-size: 36px; 
  font-weight: bold;
  color: #FD43A0;
  margin:4px;
}

.small-title {
  font-size: 16px;
  font-weight: semi-bold;
  color: #FFFFFF;
  margin:4px;
}
</style>
