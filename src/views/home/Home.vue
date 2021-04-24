<template>
    <div class="home-page" v-if="show">
        <div class="description">
            <div class="name-text">打字练习</div>
            <div class="version-text">版本: 0.0.1</div>
        </div>
        <reference />
        <key-panel />
        <bottom-area />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, Ref, provide, nextTick } from 'vue';
    import Reference from '@/components/reference/Reference.vue';
    import KeyPanel from '@/components/key_panel/KeyPanel.vue';
    import BottomArea from '@/components/bottom_area/BottomArea.vue';

    export default defineComponent({
        name: 'Home',
        components: {
            Reference,
            KeyPanel,
            BottomArea
        },
        setup() {

            let show: Ref<boolean> = ref(true);

            function _onShow(): void {
                show.value = false;
                nextTick(() => {
                    show.value = true;
                })
            }

            provide('restart', _onShow);

            return {
                show
            }
        }
    });
</script>

<style lang="scss" scoped>
    .home-page {
        position: relative;
        min-height: 100vh;
        // background: url(~@/assets/images/background.png) no-repeat;
        // background-size: 100% 100%;
        background-color: #333;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .description {
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;

            .name-text {
                font-size: 0.18rem;
                color: #999;
            }
            .version-text {
                margin-top: 0.05rem;
                font-size: 0.12rem;
                color: #999;
            }
        }
    }
</style>
