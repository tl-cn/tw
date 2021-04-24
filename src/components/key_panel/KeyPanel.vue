<template>
    <div class="key-panel-page">
        <div class="panel-area">
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
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Keyfield from '@/components/keyfield/Keyfield.vue';
    import { useKeyPanel } from './index';

    export default defineComponent({
        components: {
            Keyfield
        },
        setup() {
            return useKeyPanel();
        }
    })
</script>

<style lang="scss" scoped>
    .key-panel-page {
        padding: 0.08rem;
        border-radius: 0.06rem;
        background-color: #000;
        box-shadow: 0 0 0.08rem #fff inset;
        margin: 0.4rem 0 0.5rem;

        .panel-area {
            width: 7.2rem;
            display: grid;
            grid-template-columns: repeat(90, 1fr);
            grid-auto-rows: 0.48rem;

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
        }
    }
</style>