<template>
  <div id="layout">
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  name: 'BaseLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style scoped>
#layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem;
}
</style>