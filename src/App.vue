<template>
  <div class="mainPage">
    <BaseLayout>
      <router-view />
  </BaseLayout>
  </div>
</template>

<script>

import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
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
