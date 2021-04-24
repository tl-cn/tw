<template>
    <div class="keyfield-page">
        <div class="keyarea" :class="[
            keyfield.color, 
            keyfield.anim ? 'anim' : '',
            keyfield.multiple ? 'multiples' : '', 
            keyfield.press ? 'press' : '',
            (keyfield.variation === 'guidance' || keyfield.variation === 'caution') && !$store.state.prompt ? '' : keyfield.variation
        ]">
            <div class="key-title">{{ keyfield.letters.join(' ') }}</div>
            <div class="key-fn" v-if="keyfield.multiple">{{ keyfield.appendix }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import { IKeyfield, EKEY_COLOR } from '@/types';

    export default defineComponent({
        props: {
            keyfield: {
                type: Object as PropType<IKeyfield>,
                default() {
                    return {}
                },
                require: true
            }
        }
    });
</script>

<style lang="scss" scoped>

    @mixin field-effect($color) {
        border: 1px solid $color;
        box-shadow: 0 0 0.06rem $color inset;

        &:hover, &.press {
            box-shadow: 0 0 0.26rem $color inset;
        }
    }

    $effect-map: ('orange': #ff6666, 'green': #00aa00, 'yellow': #bbbb00, 'blue': #4488ff);

    .keyfield-page {
        padding: 0.02rem;

        .keyarea {
            @include field-effect(#666);
            height: 100%;
            border-radius: 0.03rem;
            cursor: pointer;
            display: grid;

            &.anim {
                transition: all 0.3s ease;
            }
            &.multiples {
                grid-template-rows: 3fr 2fr;
            }
            .key-title {
                font-size: 0.145rem;
                color: #ddd;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .key-fn {
                font-size: 0.08rem;
                color: #666;
                padding: 0.03rem;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
            }
        }
        @each $name, $color in $effect-map {
            .#{ $name } {
                @include field-effect($color);
            }
        }
        .guidance {
            position: relative;

            &::before {                                                // 点击提示
                content: '';
                $l: 0.2rem;
                position: absolute;
                left: 50%;
                top: 50%;
                width: $l;
                height: $l;
                border-radius: 50%;
                box-shadow: 2px 2px 0.1rem #87b62f inset;          
                transform: translate(-50%, -50%);
            }
        }
        .caution {
            position: relative;

            &::before {                                                // 点击错误
                content: 'X';
                position: absolute;
                width: calc(100% - 0.05rem);
                height: 100%;
                border-radius: 0.03rem;
                font-size: 0.13rem;
                font-weight: bold;
                color: #fff;
                -webkit-text-stroke: 2px #f1352c;
                background: linear-gradient(135deg, rgba(134, 181, 47, 0.1), rgba(239, 52, 42, 0.3));
                padding-right: 0.05rem;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
            }
        }
        .point {
            position: relative;

            &::before {                                                 // 目标提示
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0.03rem;
                animation: twinkle 0.5s linear infinite alternate;
                -webkit-animation: twinkle 0.5s linear infinite alternate;
            }
        }
        .correct {
            background-color: rgba(10, 239, 10, 0.7);                 // 目标正确
        }
        .overtime {
            background-color: rgba(245, 167, 27, 1);                  // 目标超时
        }
    }
</style>