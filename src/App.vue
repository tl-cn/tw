<template>
    <router-view/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Rem from '@/assets/scripts/rem';

    export default defineComponent({
        setup() {
            Rem.render();
        }
    })
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    img {
        width: 100%;
        height: 100%;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 0.2rem;
    }

    @keyframes twinkle {
        0% {
            box-shadow: 0 0 0.06rem #036e03 inset;
        }
        100% {
            box-shadow: 2px 2px 0.36rem #036e03 inset;    
        }
    }
    @-webkit-keyframes twinkle {
        0% {
            box-shadow: 0 0 0.06rem #036e03 inset;
        }
        100% {
            box-shadow: 2px 2px 0.36rem #036e03 inset;    
        }
    }
</style>
