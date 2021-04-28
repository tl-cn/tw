<template>
    <div class="home-page" v-if="show">
        <div class="description">
            <div class="name-text">打字练习</div>
            <div class="version-text">版本: 0.0.1</div>
        </div>
        <div class="help-icon" @click="onChangeDisplay"></div>
        <reference />
        <key-panel />
        <bottom-area />
        <indication @changeDisplay="onChangeDisplay" v-if="display" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, provide, nextTick, reactive, toRefs } from 'vue';
    import Reference from '@/components/reference/Reference.vue';
    import KeyPanel from '@/components/key_panel/KeyPanel.vue';
    import BottomArea from '@/components/bottom_area/BottomArea.vue';
    import Indication from '@/components/indication/Indication.vue';

    export default defineComponent({
        name: 'Home',
        components: {
            Reference,
            KeyPanel,
            BottomArea,
            Indication
        },
        setup() {

            let data = reactive({
                show: true,
                display: false
            });

            function _onShow(): void {
                data.show = false;
                nextTick(() => {
                    data.show = true;
                })
            }

            provide('restart', _onShow);

            function onChangeDisplay(): void {
                data.display = !data.display;
            }

            return {
                ...toRefs(data),
                onChangeDisplay
            }
        }
    });
</script>

<style lang="scss" scoped>
    .home-page {
        position: relative;
        min-height: 100vh;
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
        .help-icon {
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            width: 0.25rem;
            height: 0.25rem;
            background: url(~@/assets/icons/ico_help.png) center/contain no-repeat;
            opacity: 0.8;
        }
    }
</style>
