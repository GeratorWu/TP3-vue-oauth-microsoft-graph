<template>
  <button
    :class="['base-button', variantClass]"
    :disabled="disabled"
  >
    {{ nom }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary', 
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nom: {
        type: String
    }
  },
  computed: {
    variantClass() {
      return `base-button--${this.variant}`;
    },
  },
};
</script>

<style scoped>

.base-button {
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 20px;
}


.base-button:hover{
    background-color: white !important;
    color: #04AA6D;
    font-weight: bold;
}

.base-button:disabled {
    filter: brightness(130%);
    cursor: not-allowed;
}

.base-button--primary {
    background-color: #04AA6D; 
    color: white;
    border: 2px solid #04AA6D;
}

</style>
