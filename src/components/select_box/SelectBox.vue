<template>
    <div class="select-box-page">
        <transition name="motion">
            <div class="option-box" 
                :key="name" 
                @mouseenter="onShow(true)"
                @mouseleave="onHide(true)" 
                v-if="show"
            >
                <div class="option-text"
                    v-for="item in list"
                    :key="'s' + item.id"
                    :class="{ selected: item.selected }"
                    @click="onOptionClick(item)"
                >{{ item.text }}</div>
            </div>
        </transition>
        <div class="show-layer" 
            @click="onLayerClick" 
            @mouseover="onShow(false)"
            @mouseout="onHide(false)"
        >{{ content }}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, reactive, toRefs, watchEffect, inject } from 'vue';
    import { ISelectOption } from '@/types';

    export default defineComponent({
        props: {
            name: {
                type: String,
                default: '',
                require: true
            },
            list: {
                type: Object as PropType<ISelectOption[]>,
                default() {
                    return []
                },
                require: true
            }
        },
        setup(props: { name: string, list: Array<ISelectOption> }, { emit }) {

            let _onRestart: Function = inject('restart') as Function;
            let _leaveHide: boolean = true;
            let _outHide: boolean = true;

            let data = reactive({
                show: false,
                content: ''
            });

            function onLayerClick(): void {
                // data.show = !data.show;
            }

            function onShow(option: boolean): void {
                data.show = true;
                _leaveHide = option;
                _outHide = !option;
            }

            function onHide(option: boolean): void {
                setTimeout(() => {
                    if (option) {
                        _leaveHide && (data.show = false);
                        _leaveHide = true;
                    } else {
                        _outHide && (data.show = false);
                        _outHide = true;
                    }
                }, 100);
            }

            function onOptionClick(o: ISelectOption): void {
                emit('eventHandler', {
                    name: props.name,
                    id: o.id
                });
                setTimeout(() => { 
                    data.show = false;
                    setTimeout(() => { _onRestart(); }, 300);
                }, 200);
            }

            watchEffect(() => {
                for (let i = 0, length = props.list.length; i < length; i++) {
                    if (props.list[i].selected) {
                        data.content = props.list[i].text;
                    }
                }
            })

            return {
                ...toRefs(data),
                onLayerClick,
                onShow,
                onHide,
                onOptionClick
            }
        }
    })
</script>

<style lang="scss" scoped>
    .select-box-page {
        position: relative;
        
        .option-box {
            position: absolute;
            left: 50%;
            bottom: 0.25rem;
            min-width: 100%;
            transform: translateX(-50%);

            .option-text {
                height: 0.25rem;
                background-color: #444;
                font-size: 0.1rem;
                color: #999;
                line-height: 0.25rem;
                text-align: center;
                white-space: nowrap;
                padding: 0 0.05rem;
                cursor: pointer;

                &.selected {
                    background-color: #40c7db;
                    font-weight: bold;
                    color: #111;
                }
            }
        }
        .motion-enter-active, .motion-leave-active {
            transition: bottom,opacity 0.3s ease;
        }
        .motion-enter-from, .motion-leave-to {
            bottom: 0;
            opacity: 0;
        }
        .show-layer {
            position: relative;
            z-index: 10;
            height: 0.25rem;
            background-color: #444;
            font-size: 0.1rem;
            color: #999;
            line-height: 0.25rem;
            text-align: center;
            padding: 0 0.05rem;
            cursor: pointer;
        }
    }
</style>