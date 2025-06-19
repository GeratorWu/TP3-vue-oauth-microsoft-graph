<template>
  <div class="mainPage">
    <BaseLayout>
    <HomePage />
  </BaseLayout>
  </div>
</template>

<script>

import HomePage from './components/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

</style>
