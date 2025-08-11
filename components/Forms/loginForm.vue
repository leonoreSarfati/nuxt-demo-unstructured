<template>
  <div class="login-form">
    <h2 class="big-title">Connexion</h2>
    <p class="text">Entrez vos identifiants pour vous connecter.</p>

    <input
      v-model="username"
      type="text"
      placeholder="Nom d'utilisateur"
      class="small-text"
    />

    <ElementButton :label="'Se connecter'" @click="handleLogin" />

    <p class="text-link" @click="emit('close')">Annuler</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUsers } from '~/composables/useUsers'
import { useUserStore } from '~/stores/userStore'


const emit = defineEmits(['close'])

const email = ref('')
const username = ref('')
const { getUserByUsername } = useUsers()

const router = useRouter()
const handleLogin = async () => {
  if (!username.value) {
    alert('Merci de remplir tous les champs.')
    return
  }

  try {
    const user = await getUserByUsername(username.value)

    if (!user) {
      alert('Utilisateur introuvable ou email incorrect.')
      return
    }

    console.log('Connecté !', user)
    const userStore = useUserStore()

    userStore.setUser(user)


    emit('close') // Fermer le formulaire

    // Redirection vers la page des films
    router.push('/movies')

  
  } catch (error) {
    console.error('Erreur de connexion :', error)
    alert("Une erreur est survenue.")
  }
}
</script>

<style scoped>
.login-form {
  background: var(--dark);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}




</style>
