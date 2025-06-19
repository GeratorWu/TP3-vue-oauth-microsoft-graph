<template>
  <div class="mainPage">
    <BaseHeader />
    <HomePage />
    <BaseFooter />
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'
import BaseHeader from './components/BaseHeader.vue'
import BaseFooter from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseHeader,
    BaseFooter
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.mainPage{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

</style>
