<template>
    <div class="keyfield-page">
        <div class="keyarea" :class="[
            keyfield.border, 
            keyfield.anim ? 'anim' : '',
            keyfield.press ? 'press' : '',
            !$store.state.prompt && (keyfield.variation === 'guidance' || keyfield.variation === 'caution') ? '' : keyfield.variation
        ]">
            <div class="key-text"
                v-for="(letter, index) in keyfield.letters"
                :key="'l' + index"
                :class="{
                    backspace: letter === 'Backspace',
                    win: letter === 'Win',
                    menu: letter === 'Menu'
                }"
            >{{ letter === 'Win' || letter === 'Menu' ? '' : letter }}</div>
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

    $effect-map: ('orange': #a14545, 'green': #048304, 'yellow': #8a8a04, 'blue': #385fa3, 'purple': #984e9b);

    .keyfield-page {
        padding: 0.02rem;

        .keyarea {
            @include field-effect(#666);
            height: 100%;
            border-radius: 0.03rem;
            cursor: pointer;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;

            &.anim {
                transition: all 0.3s ease;
            }
            .key-text {
                font-size: 0.15rem;
                color: #ddd;

                &:nth-of-type(2) {
                    margin-bottom: 5px;
                }
                &.backspace {
                    position: relative;
                    top: -0.05rem;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: -0.1rem;
                        width: 0.5rem;
                        height: 0.1rem;
                        background: url(~@/assets/icons/ico_backspace.png) center/contain no-repeat;
                    }
                }
                &.win {
                    width: 0.25rem;
                    height: 0.2rem;
                    background: url(~@/assets/icons/ico_win.png) center/contain no-repeat;
                }
                &.menu {
                    width: 0.2rem;
                    height: 0.24rem;
                    background: url(~@/assets/icons/ico_menu.png) center/contain no-repeat;
                }
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
                $l: 0.4rem;
                position: absolute;
                left: 50%;
                top: 50%;
                width: $l;
                height: $l;
                border-radius: 50%;
                box-shadow: 2px 2px 0.2rem #87b62f inset;          
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
                font-size: 0.15rem;
                font-weight: bold;
                color: #fff;
                -webkit-text-stroke: 2px #f1352c;
                background: linear-gradient(145deg, rgba(134, 181, 47, 0.1), rgba(239, 52, 42, 0.3));
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
            background-color: rgba(10, 239, 10, 0.5);                  // 目标正确
        }
        .overtime {
            background-color: rgba(245, 167, 27, 0.8);                  // 目标超时
        }
        .pale {
            background-color: #333;
        }
        .grey {
            background-color: #1f1f1f;
        }
        .ashy {
            background-color: #1b1b1b;
        }
    }
</style>