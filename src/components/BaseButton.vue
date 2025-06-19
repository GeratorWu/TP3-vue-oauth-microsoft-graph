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


.base-button--primary:hover{
    background-color: white;
    color: #04AA6D;
    font-weight: bold;
}

.base-button--warn:hover{
    background-color: white;
    color: orange;
    font-weight: bold;
}

.base-button--danger:hover{
    background-color: white;
    color: red;
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

.base-button--warn {
  background-color: orange;
  color: white;
  border: 2px solid orange;
}

.base-button--danger {
  background-color: red;
  color: white;
  border: 2px solid red;
}
</style>
