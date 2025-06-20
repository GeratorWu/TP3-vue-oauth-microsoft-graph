<template>
  <div class="homePage">
    <p>Bienvenue sur la page d'accueil</p>
    <p>Voici les BaseButton :</p>
    <BaseButton nom="BaseButton" />
    <BaseButton nom="BaseButton" disabled="true" />
    <BaseButton nom="BaseButton with color props" variant="warn" />
    <BaseButton nom="BaseButton with color props" variant="danger" />
    <AsyncButton :asyncButtonCounter=counterAsyncBtn @increaseAsyncBtnCounter="counterAsyncBtn++"/>
  </div>
</template>

<script>


import BaseButton from './BaseButton.vue'
import AsyncButton from './AsyncButton.vue'
export default {
  name: 'HomePage',
  components: {
    BaseButton,
    AsyncButton
  },
  data() {
    return { counterAsyncBtn: 2 }
  }

}
</script>


<style>
.homePage {}
</style>
