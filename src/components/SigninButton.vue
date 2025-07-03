<template>
  <button v-if="!isAuthenticated" @click="handleLogin" :disabled="loading">
    {{ loading ? 'Connexion...' : 'Se connecter' }}
  </button>
</template>

<script>
import { signInAndGetUser } from '@/lib/microsoftGraph'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SigninButton',

  data() {
    return {
      loading: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  },

  methods: {
    ...mapActions(['setUser']),

    async handleLogin() {
      this.loading = true
      const user = await signInAndGetUser()
      this.loading = false

      if (user) {
        this.setUser(user)
        this.$emit('login-success', user)
        console.log(user.nom + ' ' + user.prenom)
      } else {
        console.warn('Connexion échouée.')
        this.$emit('login-failed')
      }
    }
  }
}
</script>
