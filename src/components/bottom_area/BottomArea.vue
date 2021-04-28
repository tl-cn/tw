<template>
    <div class="bottom-area-page">
        <div class="progress-board">
            <div class="text time-text">时间: {{ times }}</div>
            <div class="text speed-text">速度: {{ speed }}KPM</div>
            <div class="text accuracy-text">正确率: {{ accuracy }}%</div>
            <div class="text progress-text">进度: {{ progress }}%</div>
        </div>
        <div class="selected-area">
            <select-box name="displays" :list="displays" @eventHandler="onSelectOptionEvent" />
            <select-box name="characters" :list="characters" @eventHandler="onSelectOptionEvent" />
            <select-box name="categories" :list="categories" @eventHandler="onSelectOptionEvent" />
            <select-box name="durations" :list="durations" @eventHandler="onSelectOptionEvent" />
        </div>
        <div class="key-guidance" @click="onRemindClick">
            <div class="float-layer" :class="{ active: remind }"><span></span></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import SelectBox from '@/components/select_box/SelectBox.vue';
    import { useBottomArea } from './index';

    export default defineComponent({
        components: {
            SelectBox
        },
        setup() {
            return useBottomArea();
        }
    });
</script>

<style lang="scss" scoped>
    .bottom-area-page {
        position: fixed;
        bottom: 0.1rem;
        left: 0.2rem;
        width: calc(100% - 0.4rem);
        height: 0.4rem;
        border-top: 1px solid #999;
        border-bottom: 1px solid rgba($color: #999, $alpha: 0.1);
        background-color: #333;
        display: grid;
        grid-template-columns: auto 1fr auto;
        justify-items: center;
        align-items: center;

        &::before {
            content: '广州点亮网络科技有限公司©版本所有';
            position: absolute;
            top: -0.2rem;
            right: 0;
            font-size: 0.1rem;
            color: #999;
        }
        .progress-board {
            display: flex;

            .text {
                height: 0.18rem;
                font-size: 0.115rem;
                color: #999;
                line-height: 0.18rem;
                padding: 0 0.08rem 0 0.2rem;
            }
            .time-text {
                background: url(~@/assets/icons/ico_clock.png) no-repeat;
                background-position: left center;
                background-size: 0.18rem 0.18rem;
            }
            .speed-text {
                background: url(~@/assets/icons/ico_speed.png) no-repeat;
                background-position: left center;
                background-size: 0.18rem 0.16rem;
            }
            .accuracy-text {
                background: url(~@/assets/icons/ico_hook.png) no-repeat;
                background-position: left center;
                background-size: 0.18rem 0.18rem;
            }
            .progress-text {
                background: url(~@/assets/icons/ico_cake.png) no-repeat;
                background-position: left center;
                background-size: 0.18rem 0.18rem;
            }
        }
        .selected-area {
            min-width: 50%;
            background-color: #444;
            border-radius: 0.05rem;
            padding: 0 0.04rem;
            display: grid;
            grid-template-columns: repeat(4, auto);
        }
        .key-guidance {
            position: relative;
            width: 0.8rem;
            height: 0.2rem;
            border-radius: 0.1rem;
            background: #999 url(~@/assets/images/img_tips.png) no-repeat;
            background-size: 0.55rem 0.1rem;
            background-position: 0.2rem center;

            .float-layer {
                position: absolute;
                width: 0.22rem;
                height: 100%;
                border-radius: 0.15rem;
                font-size: 0;
                padding: 0 0.05rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                transition: width 0.3s ease;

                &.active {
                    width: 100%;
                    background: #87b630 url(~@/assets/images/img_tips.png) no-repeat;
                    background-position: 0.05rem center;
                    background-size: 0.55rem 0.1rem;
                }
                span {
                    display: inline-block;
                    width: 0.12rem;
                    height: 0.12rem;
                    border-radius: 50%;
                    background-color: #fff;
                }
            }
        }
    }
</style>