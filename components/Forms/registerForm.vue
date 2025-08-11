<template>
  <div class="register-card">
    <p class="big-title">Créer un compte</p>
    <p class="small-text">Entrez vos informations ci-dessous :</p>

    <input class="small-text" v-model="email" type="email" placeholder="Email" />
    <input class="small-text" v-model="username" type="text" placeholder="Nom d'utilisateur" />

    <ElementButton @click="handleRegister" label="Valider"></ElementButton>
    <p class="text-link" @click="emit('close')">Annuler</p>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close'])

const email = ref('')
const username = ref('')

const { createUser } = useUsers() // Mon composable qui fait un appel API pour créer un utilisateur


const handleRegister = async () => {
  if (!email.value || !username.value) {
    alert('Merci de remplir tous les champs.')
    return
  }

  try {
    const newUser = await createUser({
      email: email.value,
      username: username.value
    })

    // Fermer le formulaire après inscription
    emit('close')

  } catch (error) {
    console.error('Erreur lors de la création :', error)
    alert("Échec de l'inscription. Veuillez réessayer.")
  }
}
</script>

<style scoped>
.register-card {
  background: var(--dark);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  text-align: left;
}



</style>
