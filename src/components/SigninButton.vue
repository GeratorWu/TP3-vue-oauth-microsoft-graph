<template>
  <button @click="handleLogin" :disabled="loading">
    {{ loading ? 'Connexion...' : 'Se connecter' }}
  </button>
</template>


<script>
import { signInAndGetUser } from '@/lib/microsoftGraph'

export default {
  name: 'SigninButton',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      const user = await signInAndGetUser()
      this.loading = false

      if (user) {
        console.log('Connecté en tant que :', user.username || user.name)
        this.$emit('login-success', user)
      } else {
        console.warn('Connexion échouée.')
        this.$emit('login-failed')
      }
    }
  }
}
</script>