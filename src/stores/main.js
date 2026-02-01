import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const locale = ref('uz')
  const user = ref(null)

  const setLocale = (lang) => {
    locale.value = lang
  }

  const setUser = (userData) => {
    user.value = userData
  }

  const clearUser = () => {
    user.value = null
  }

  return {
    locale,
    user,
    setLocale,
    setUser,
    clearUser,
  }
})
