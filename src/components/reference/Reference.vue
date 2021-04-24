<template>
    <div class="reference-page">
        <keyfield class="key-panel" v-for="(item, index) in contrast" :key="'R' + index" :keyfield="item" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Keyfield from '@/components/keyfield/Keyfield.vue';
    import { useReference } from './index';

    export default defineComponent({
        components: {
            Keyfield
        },
        setup() {
            return useReference();
        }
    })
</script>

<style lang="scss" scoped>
    .reference-page {
        padding: 0.08rem;
        border-radius: 0.06rem;
        background-color: #000;
        box-shadow: 0 0 0.08rem #fff inset;
        display: flex;

        .key-panel {
            width: 0.48rem;
            height: 0.48rem;
        }
    }
</style>