<template>
    <base-button :disabled="isPending" :color="color" :nom=buttonText @click.stop.prevent="handleClick">

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
        asyncButtonCounter: {
            type: Number
        }
    },
    emits: ['increaseAsyncBtnCounter'],
    data() {
        return { isPending: false, buttonText:"AsyncButton"}
    },
    methods: {

        async handleClick() {
            this.isPending = true;
            
            this.$emit('increaseAsyncBtnCounter');
            

            await new Promise(resolve => setTimeout(resolve, this.asyncButtonCounter * 1000))
            
            this.buttonText=String(this.asyncButtonCounter)
            this.isPending = false;
        }
    }
}
</script>