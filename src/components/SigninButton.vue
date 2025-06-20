<template>
  <button v-if="!isLoggedIn" @click="handleLogin" :disabled="loading">
    {{ loading ? 'Connexion...' : 'Se connecter' }}
  </button>
</template>

<script>
import { signInAndGetUser } from '@/lib/microsoftGraph'

export default {
  name: 'SigninButton',
  data() {
    return {
      loading: false,
      isLoggedIn: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      const user = await signInAndGetUser()
      //console.log(user.nom+" "+user.prenom);
      
      this.loading = false

      if (user) {
        this.isLoggedIn = true
        this.$emit('login-success', user)
        console.log(user.nom+" qfdqsd "+user.prenom);


    } else {
        console.warn('Connexion échouée.')
        this.$emit('login-failed')
      }
    }
  }
}
</script>
