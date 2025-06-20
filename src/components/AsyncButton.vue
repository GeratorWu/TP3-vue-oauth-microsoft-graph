<template>
    <base-button :disabled="isPending" :color="color" :nom=nom @click.stop.prevent="handleClick">
        
    <p v-if="isPending"></p>


    </base-button>
</template>


<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    nom: {
      type: String
    }
  },
  emits: ['click'],
  data() {
    return { isPending: false }
  },
  methods: {
    async handleClick() {
      this.isPending = true;

      this.$emit('click');

      await new Promise(resolve => setTimeout(resolve, 2000));

      this.isPending = false;
    }
  }
}
</script>