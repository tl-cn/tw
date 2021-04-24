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
        <div class="keyboard-setting" @click="onRemindClick">
            <div class="selected-box">
                <div class="slide-layer" :class="{ active: remind }"><span></span></div>
                <span class="span-text yes" :class="{ active: remind }"></span>
                <span class="span-text no"></span>
            </div>
            <div class="setting-text">提示键盘</div>
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
        .keyboard-setting {
            cursor: pointer;
            display: flex;
            align-items: center;

            .selected-box {
                position: relative;
                width: 0.3rem;
                height: 0.15rem;
                background-color: #999;
                border-radius: 0.075rem;
                padding: 0 0.05rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .span-text {
                    display: inline-block;
                    width: 0.1rem;
                    height: 0.1rem;

                    &.yes {
                        background: url(~@/assets/images/img_yes.png) center/contain no-repeat;
                    }
                    &.no {
                        background: url(~@/assets/images/img_no.png) center/contain no-repeat;
                    }
                    &.active {
                        position: relative;
                        z-index: 1;
                    }
                }
                .slide-layer {
                    position: absolute;
                    left: 0;
                    width: 0.16rem;
                    height: 100%;
                    font-size: 0;
                    background-color: #999;
                    border-radius: 0.075rem;
                    padding: 0 0.03rem;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    &.active {
                        width: 100%;
                        background-color: #4ecb2f;
                    }
                    span {
                        position: relative;
                        z-index: 10;
                        display: inline-block;
                        width: 0.1rem;
                        height: 0.1rem;
                        background-color: #fff;
                        border-radius: 50%;
                    }
                }
            }
            .setting-text {
                font-size: 0.12rem;
                color: #999;
                font-weight: bold;
                padding-left: 0.05rem;
            }
        }
    }
</style>