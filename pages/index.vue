<template>
  <div class="home-background">
    <main class="home-content">
      <template v-if="formStore.currentForm === null">
        <p class="huge-title">Bienvenue</p>
        <p class="text">Découvrez et notez vos films préférés.</p>
        <ElementButton @click="formStore.showRegister()" label="Rejoindre la commu"></ElementButton>
      </template>
      <FormsRegisterForm v-if="formStore.currentForm === 'register'" @close="formStore.closeForm()" />
      <FormsLoginForm v-if="formStore.currentForm === 'login'" @close="formStore.closeForm()" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { FormsLoginForm } from '#components';
import { useFormStore } from '~/stores/useFormStore'

const formStore = useFormStore()

function onClose() {
  formStore.closeForm()
}


</script>

<style scoped>
.home-background {
  position: fixed; /* fixe le bg sur toute la page */
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('/assets/images/Wall_of_lame.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* derrière le contenu */
}

.home-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  color: white;
  text-shadow: 0 0 10px rgba(0,0,0,0.7);
}
</style>
