<template>
  <div class="homePage">
    <p>Bienvenue sur la page d'accueil</p>
    <p>Voici les BaseButton :</p>
    <BaseButton nom="BaseButton"/>
    <BaseButton nom="BaseButton" disabled="true"/>
    <BaseButton nom="BaseButton with color props" variant="warn"/>
    <BaseButton nom="BaseButton with color props" variant="danger"/>
    </div>
</template>

<script>


import BaseButton from './BaseButton.vue'

export default {
  name: 'HomePage',
  components: {
    BaseButton
  }
}
</script>


<style>
.homePage{
}
</style>
