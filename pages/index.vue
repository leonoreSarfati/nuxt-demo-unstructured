<template>
  <div class="home-background">
    <main class="home-content">
      <template v-if="formStore.currentForm === null">
        <p class="huge-title">Bienvenue</p>
        <p class="text">Découvrez et notez vos films préférés.</p>
        <button class="base-button small-title" @click="handleClick">
          Rejoindre la commu
        </button>
      </template>
      <div v-if="formStore.currentForm === 'register'" class="form">
        <p class="big-title">Créer un compte</p>
        <p class="small-text">Entrez vos informations ci-dessous :</p>

        <input class="small-text" v-model="email" type="email" placeholder="Email" />
        <input class="small-text" v-model="username" type="text" placeholder="Nom d'utilisateur" />

        <button class="base-button small-title" @click="handleRegister">
          Valider
        </button>
        <p class="text-link" @click="onClose">Annuler</p>
      </div>
      
      <div v-if="formStore.currentForm === 'login'" class="form">
        <h2 class="big-title">Connexion</h2>
        <p class="text">Entrez vos identifiants pour vous connecter.</p>

        <input
          v-model="username"
          type="text"
          placeholder="Nom d'utilisateur"
          class="small-text"
        />
        <button class="base-button small-title" @click="handleLogin">
              Se connecter
        </button>

        <p class="text-link" @click="onClose">Annuler</p>
    </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useFormStore } from '~/stores/useFormStore'
import { users } from "~/data/users" 
const router = useRouter()

const email = ref('')
const username = ref('')


const formStore = useFormStore()


const handleClick = () => {
  formStore.showRegister()
}

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

    onClose() // Fermer le formulaire après inscription

  } catch (error) {
    console.error('Erreur lors de la création :', error)
    alert("Échec de l'inscription. Veuillez réessayer.")
  }
}

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

    const userStore = useUserStore()

    userStore.setUser(user)
    console.log('Connecté !', user)

    onClose() // Fermer le formulaire
    // Redirection vers la page des films
    router.push('/movies')

  } catch (error) {
    console.error('Erreur de connexion :', error)
    alert("Une erreur est survenue.")
  }
}

function onClose() {
  formStore.closeForm()
}

const createUser = async (newUser) => {
    const id = Math.max(...users.map(u => u.id)) + 1
    const user = {
      id,
      username: newUser.username ?? `user${id}`,
      favoriteMovies: [],
      watchedMovies: [],
    }
    users.push(user)
    return user
}

const getUserByUsername = async (username) => {
    const user = users.find(u => u.username === username)
    return user ?? null
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

.base-button {
  background-color: #3498DB;
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

.form {
  background: #000000;
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

.huge-title {
  font-size: 64px;
  font-weight: bold;
  color: #FFFFFF;
  margin:4px;
}

.big-title {
  font-size: 36px;
  font-weight: bold;
  color:#FFFFFF;
  margin:4px;
}

.text-link {
  font-size: 16px;
  font-weight: semi-bold;
  color: #3498DB;
  text-decoration: underline;
  margin:4px;
}

.small-text {
  font-size: 14px;
  font-weight: normal;
  color: #FFFFFFB2;
}

.small-title {
  font-size: 16px;
  font-weight: semi-bold;
  color: #FFFFFF;
  margin:4px;
}

.text {
  font-size: 18px;
  font-weight: normal;
  color: #FFFFFF;
  margin:4px;
}

input {
  background-color: #1D1D1D; /* ou une couleur hex comme #1D1D1D */
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  outline: none;
}
</style>
