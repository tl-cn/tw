<template>
    <div class="global-popup-page"
        :class="{ shade: param.shade, through: !param.shade_click }"
        @click="onMaskClick"
        v-show="param.show"
    >
        <transition-group name="popup-layer">
            <div :key="'fixed'" v-if="param.unfold">
                <dialog-layer :options="param" @eventHandler="onEventHandler" v-if="param.name === 'dialog'" />
            </div>
            <div :key="'slot'" v-if="param.slot">
                <slot></slot>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, toRefs, PropType, watchEffect } from 'vue';
    import DialogLayer from './dialog_layer/DialogLayer.vue';
    import { IPopupConfig } from '@/types';

    type TPopupOption = Partial<IPopupConfig>;
    type TValue = IPopupConfig[keyof IPopupConfig];
    interface IPopupData {
        param: IPopupConfig;
    }
    interface IEventHandler {
        name: string;
        value?: string;
    }

    export default defineComponent({
        name: 'GlobalPopup',
        components: {
            DialogLayer
        },
        props: {
            options: {
                type: Object as PropType<TPopupOption>,
                default() {
                    return {}
                }
            }
        },
        setup(props: { options: TPopupOption }) {

            let _openTimeoutId: number | null = null;
            let _closeTimeoutId: number | null = null;

            let data: IPopupData = reactive({
                param: {
                    show: false,
                    shade: true,
                    shade_click: true,
                    shade_close: false,
                    unfold: false,
                    name: '',
                    title: '提示',
                    content: '',
                    duration: 0,
                    slot: false,
                    success: Function,
                    fail: Function,
                    complete: Function
                }
            });

            function open(ops: TPopupOption = {}): void {
                for (let i in ops) {
                    let k = i as keyof IPopupConfig;
                    (<TValue>data.param[k]) = ops[k] as TValue;
                }
                data.param.show = true;
                setTimeout(() => { data.param.unfold = true; }, 100);
                if (_openTimeoutId !== null) {
                    clearTimeout(_openTimeoutId);
                    _openTimeoutId = null;
                }
                if (_closeTimeoutId !== null) {
                    clearTimeout(_closeTimeoutId);
                    _closeTimeoutId = null;
                }
                if (data.param.duration > 0) {
                    let _duration: number = data.param.duration < 500 ? 500 : data.param.duration;
                    _openTimeoutId = setTimeout(() => { 
                        close(); 
                        _openTimeoutId = null;
                    }, _duration);
                }
            }

            function close(): void {
                data.param.unfold = false;
                data.param.complete();
                if (_closeTimeoutId !== null) clearTimeout(_closeTimeoutId);
                _closeTimeoutId = setTimeout(() => {
                    data.param.show = false;
                    _closeTimeoutId = null;
                }, 500);
            }

            function onMaskClick(): void {
                if (data.param.shade_close) close();
            }

            function onEventHandler(e: IEventHandler): void {
                if (e.name === 'dialog') {
                    close();
                }
            }

            watchEffect(() => {
                for (let i in props.options) {
                    let k = i as keyof IPopupConfig;
                    (<TValue>data.param[k]) = props.options[k] as TValue;
                }
            })

            return {
                ...toRefs(data),
                onMaskClick,
                open,
                close,
                onEventHandler
            }
        }
    })
</script>

<style lang="scss" scoped>
    .global-popup-page {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &.shade {
            background-color: rgba(17, 17, 17, 0.2);
        }
        &.through {
            pointer-events: none;
        }
        .popup-layer-enter-active, .popup-layer-leave-active {
            transition: all 0.3s ease-in-out;
        }
        .popup-layer-enter-from, .popup-layer-leave-to {
            transform: scale(0.5);
            opacity: 0;
        }
    }
</style>