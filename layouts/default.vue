<template>
  <div>
    <header class="header">
      <div class="header-left site-title">
        <h1>MovieSpot</h1>
      </div>
      <div class="header-right">
        <ElementButton v-if="route.path == '/'" label="S'identifier" @click="onLogin" ></ElementButton>
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


</style>
