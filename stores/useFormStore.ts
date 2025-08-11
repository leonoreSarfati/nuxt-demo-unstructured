
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const currentForm = ref<'register' | 'login' | null>(null)

  function showRegister() {
    currentForm.value = 'register'
  }

  function showLogin() {
    currentForm.value = 'login'
  }

  function closeForm() {
    currentForm.value = null
  }

  return { currentForm, showRegister, showLogin, closeForm }
})
