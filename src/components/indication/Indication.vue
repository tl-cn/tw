<template>
    <div class="indication-page">
        <div class="backward-icon" @click="onBackwardClick"></div>
        <div class="key-panel">
            <div class="key-fields">
                <keyfield class="keyfield" 
                    v-for="item in keyboard" 
                    :key="item.id" :keyfield="item" 
                    :class="{
                        backspace: item.id === '1-14',
                        tab: item.id === '2-1',
                        slash: item.id === '2-14',
                        caps: item.id === '3-1',
                        enter: item.id === '3-13',
                        shit: item.id === '4-1' || item.id === '4-12',
                        func: item.id.substr(0,1) === '5',
                        space: item.id === '5-4'
                    }"
                />
            </div>
        </div>
        <div class="tagged-box" :class="[style_name]">
            <div class="step-text" :class="[style_name]">{{ show_text }}</div>
            <div class="step-button" :class="[style_name]" @click="onStepClick">{{ step_text }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Keyfield from '@/components/keyfield/Keyfield.vue';
    import { useIndication } from './index';

    export default defineComponent({
        components: {
            Keyfield
        },
        setup(props, ctx) {
            return useIndication(ctx);
        }
    })
</script>

<style lang="scss" scoped>
    .indication-page {
        position: absolute;
        width: 100%;
        height: 100%;
        // background-color: rgba(51, 51, 51, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;

        .backward-icon {
            position: absolute;
            z-index: 10;
            top: 0.2rem;
            right: 0.2rem;
            width: 0.25rem;
            height: 0.25rem;
            background: #333 url(~@/assets/icons/ico_back.png) center/contain no-repeat;
        }
        .key-panel {
            position: relative;
            z-index: 10;
            padding: 0.08rem;
            border-radius: 0.06rem;
            background-color: #000;
            box-shadow: 0 0 0.08rem #fff inset;
            margin: 1.16rem 0 0.7rem;

            .key-fields {
                position: relative;
                width: 9rem;
                display: grid;
                grid-template-columns: repeat(90, 1fr);
                grid-auto-rows: 0.6rem;

                .keyfield {
                    grid-column: span 6;
                }
                .func {
                    grid-column: span 8;
                }
                .tab, .slash {
                    grid-column: span 9;
                }
                .backspace, .caps, .enter {
                    grid-column: span 12;
                }
                .shit {
                    grid-column: span 15;
                }
                .space {
                    grid-column: span 34;
                }
                &::before {
                    content: '';
                    position: absolute;
                    top: 1.3rem;
                    left: 0.5rem;
                    width: 3.25rem;
                    height: 2.1rem;
                    background: url(~@/assets/images/img_hand.png) center/contain no-repeat;
                    opacity: 0.3;
                    pointer-events: none;
                }
                &::after {
                    content: '';
                    position: absolute;
                    top: 1.3rem;
                    right: 1.1rem;
                    width: 3.25rem;
                    height: 2.1rem;
                    background: url(~@/assets/images/img_hand.png) center/contain no-repeat;
                    transform: rotateY(180deg);
                    opacity: 0.3;
                    pointer-events: none;
                }
            }
        }
        .tagged-box {
            position: absolute;
            width: 100%;
            height: 100%; 
            border-style: solid;
            border-color: rgba(51, 51, 51, 0.8);
            
            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0.08rem;
                box-shadow: 0 0 0.05rem 0 #eee inset;
            }
            &.step-one {
                border-top-width: calc(100vh - 0.55rem);
                border-right-width: calc(100vw - 3.9rem);
                border-bottom-width: 0.05rem;
                border-left-width: 0.1rem;
            }
            &.step-two {
                border-top-width: calc(100vh - 0.55rem);
                border-right-width: 2rem;
                border-bottom-width: 0.05rem;
                border-left-width: 4.8rem;
            }
            &.step-three {
                border-top-width: calc(100vh - 0.55rem);
                border-right-width: 0.05rem;
                border-bottom-width: 0.05rem;
                border-left-width: calc(100vw - 1.2rem);
            }
            &.step-four {
                border-top-width: calc(50vh - 2.65rem);
                border-right-width: calc(50vw - 1.7rem);
                border-bottom-width: calc(50vh + 1.6rem);
                border-left-width: calc(50vw - 1.7rem);
            }
            .step-text {
                position: absolute;
                top: -0.2rem;
                right: 0;
                font-size: 0.15rem;
                font-family: 'Times New Roman', Times, serif;
                color: #eee;
                white-space: nowrap;

                &.step-four {
                    top: 0.1rem;
                    right: -2.4rem;
                    max-width: 2.2rem;
                    white-space: normal;
                }
            }
            .step-button {
                position: absolute;
                top: -0.2rem;
                right: -1rem;
                width: 0.8rem;
                height: 0.25rem;
                background-color: #aaa;
                border-radius: 0.05rem;
                font-family: Times;
                font-size: 0.1rem;
                color: #333;
                text-align: center;
                line-height: 0.25rem;
                cursor: pointer;

                &:hover {
                    background-color: #f5a71b;
                }
                &:active {
                    filter: brightness(80%);
                }
                &.step-three {
                    left: -1.8rem;
                }
                &.step-four {
                    top: 60%;
                    right: -1rem;
                    background-color: #f5a71b;
                }
            }
        }
    }
</style>