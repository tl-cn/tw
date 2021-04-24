<template>
    <div class="dialog-layer">
        <div class="content-text">
            <span>~O(∩_∩)O~</span>
            <span>你已顺利完成本次练习任务！</span>
        </div>
        <div class="try-again" @click="onTryAgainClick">再来一次</div>
        <div class="reset-text" @click="onResetClick">重置设置</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { IPopupConfig } from '@/types';

    export default defineComponent({
        props: {
            options: {
                type: Object as PropType<IPopupConfig>,
                default() {
                    return {}
                }
            }
        },
        setup(props: { options: IPopupConfig }, { emit }) {

            function onTryAgainClick(): void {
                props.options.success('agin');
                emit('eventHandler', {
                    name: props.options.name
                });
            }

            function onResetClick(): void {
                props.options.success('reset');
                emit('eventHandler', {
                    name: props.options.name
                });
            }

            return {
                onTryAgainClick,
                onResetClick
            }
        }
    })
</script>

<style lang="scss" scoped>
    .dialog-layer {
        position: relative;
        width: 4rem;
        height: 1.85rem;
        background-color: rgba(77, 74, 74, 0.9);
        border-radius: 0.08rem;
        border: 1px solid #888;
        padding: 0.2rem;

        .content-text {
            font-family: 'Times New Roman', Times, serif;
            font-size: 0.2rem;
            color: #99cc33;
            text-align: center;
            
            span {
                display: block;

                &:last-child {
                    font-size: 0.18rem;
                    margin-top: 0.1rem;
                }
            }
        }
        .try-again {
            width: 1.2rem;
            height: 0.4rem;
            border-radius: 0.05rem;
            border: 1px solid #666;
            background-color: rgba(51, 51, 51, 0.5);
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 0.14rem;
            color: #ccc;
            text-align: center;
            line-height: 0.4rem;
            margin: 0.3rem auto 0;
            cursor: pointer;

            &:hover {
                filter: brightness(1.5);
            }
        }
        .reset-text {
            position: absolute;
            right: 0.2rem;
            bottom: 0.1rem;
            font-size: 0.12rem;
            color: #999;
            border-bottom: 1px solid #999;
            cursor: pointer;

            &:hover {
                filter: brightness(1.5);
            }
        }
    }
</style>