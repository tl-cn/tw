import { reactive, toRefs, onBeforeMount, computed, ComputedRef, inject } from 'vue';
import { Store, useStore } from 'vuex';
import BH from '@/store/behaviors';
import { ESORT, ECOUNTER, ELETTER, EDURATION, ISelectOption } from '@/types';
import KS from '@/hooks/keyshelf';
import zeroize from '@/assets/scripts/zeroize';


interface IBottomAreaData {
    displays: Array<ISelectOption>;
    characters: Array<ISelectOption>;
    categories: Array<ISelectOption>;
    durations: Array<ISelectOption>;
    remind: boolean;
}
type TName = Exclude<keyof IBottomAreaData, 'remind'>;


export function useBottomArea() {

    let store: Store<any> = useStore();

    let data: IBottomAreaData = reactive({
        displays: [
            {
                id: 1,
                text: '顺序显示',
                selected: true,
                value: ESORT.ORDER
            },
            {
                id: 2,
                text: '随机显示',
                selected: false,
                value: ESORT.RANDOM
            }
        ],
        characters: [
            {
                id: 1,
                text: '100个字符',
                selected: true,
                value: ECOUNTER.HUNDRED
            },
            {
                id: 2,
                text: '80个字符',
                selected: false,
                value: ECOUNTER.EIGHTY
            },
            {
                id: 3,
                text: '60个字符',
                selected: false,
                value: ECOUNTER.SIXTY
            },
            {
                id: 4,
                text: '50个字符',
                selected: false,
                value: ECOUNTER.FIFTY
            },
            {
                id: 5,
                text: '40个字符',
                selected: false,
                value: ECOUNTER.FORTY
            },
            {
                id: 6,
                text: '30个字符',
                selected: false,
                value: ECOUNTER.THIRTY
            },
            {
                id: 7,
                text: '20个字符',
                selected: false,
                value: ECOUNTER.TWENTY
            },
            {
                id: 8,
                text: '10个字符',
                selected: false,
                value: ECOUNTER.TEN
            }
        ],
        categories: [
            {
                id: 1,
                text: '全部',
                selected: true,
                value: ELETTER.ALL
            },
            {
                id: 2,
                text: '只显示英文小写',
                selected: false,
                value: ELETTER.LOWERCASE
            },
            {
                id: 3,
                text: '只显示英文大写',
                selected: false,
                value: ELETTER.UPPERCASE
            },
            {
                id: 4,
                text: '只显示英文大小写',
                selected: false,
                value: ELETTER.LOW_UP_CASE
            },
            {
                id: 5,
                text: '只显示数字',
                selected: false,
                value: ELETTER.NUMBER
            },
            {
                id: 6,
                text: '只显示符号',
                selected: false,
                value: ELETTER.SYMBOL
            }
        ],
        durations: [
            {
                id: 1,
                text: '提示1秒',
                selected: false,
                value: EDURATION.ONE
            },
            {
                id: 2,
                text: '提示2秒',
                selected: false,
                value: EDURATION.TWO
            },
            {
                id: 3,
                text: '提示3秒',
                selected: false,
                value: EDURATION.THREE
            },
            {
                id: 4,
                text: '提示4秒',
                selected: false,
                value: EDURATION.FOUR
            },
            {
                id: 5,
                text: '提示5秒',
                selected: false,
                value: EDURATION.FIVE
            },
            {
                id: 6,
                text: '一直提示',
                selected: true,
                value: EDURATION.HOLD
            }
        ],
        remind: store.state.prompt
    });

    let times: ComputedRef<string> = computed(() => {
        let _m: number = Math.floor(store.state.stage / 60000);
        let _s: number = Math.floor((store.state.stage - _m * 60000) / 1000);
        return `${ _m > 59 ? 59 : _m.toString().padStart(2, '0') }分${ _s.toString().padStart(2, '0') }秒`;
    });
    let speed: ComputedRef<string> = computed(() => {
        if (store.state.stage === 0) return '--';
        return Math.floor(store.state.accomplish * 60000 / store.state.stage).toString();
    });
    let accuracy: ComputedRef<string> = computed(() => {
        if (store.state.total === 0) return '--';
        let mod: number = store.state.correct * 100 % store.state.total;
        let acc: string = (store.state.correct * 100 / store.state.total).toString();
        return mod === 0 ? acc : zeroize(acc);
    });
    let progress: ComputedRef<string> = computed(() => {
        let mod: number = store.state.accomplish * 100 % store.state.counter;
        let pro: string = (store.state.accomplish * 100 / store.state.counter).toString();
        return mod === 0 ? pro : zeroize(pro);
    });

    function onRemindClick(): void {
        data.remind = !data.remind;
        store.dispatch(BH.SET_PROMPT, data.remind);
        KS.onSetKeyfieldGuidance();
    }

    function onSelectOptionEvent(e: { name: TName; id: number }): void {
        for (let i = 0, length = data[e.name].length; i < length; i++) {
            if (data[e.name][i].id === e.id) {
                data[e.name][i].selected = true;
                switch (e.name) {
                    case 'displays':
                        store.dispatch(BH.SET_SORT, data[e.name][i].value);
                        break;
                    case 'characters':
                        store.dispatch(BH.SET_COUNTER, data[e.name][i].value);
                        break;
                    case 'categories':
                        store.dispatch(BH.SET_LETTER, data[e.name][i].value);
                        break;
                    case 'durations':
                        store.dispatch(BH.SET_DURATION, data[e.name][i].value);
                        break;
                }
            } else {
                data[e.name][i].selected = false;
            }
        }
    }

    function _onInit(): void {
        store.dispatch(BH.SET_STAGE, 0);
        store.dispatch(BH.SET_CORRECT, 0);
        store.dispatch(BH.SET_TOTAL, 0);
        store.dispatch(BH.SET_ACCOMPLISH, 0);
        
        let array = [
            {
                arr: data.displays,
                compare: store.state.sort
            },
            {
                arr: data.characters,
                compare: store.state.counter
            },
            {
                arr: data.categories,
                compare: store.state.letter
            },
            {
                arr: data.durations,
                compare: store.state.duration
            }
        ];
        for (let i = 0, length = array.length; i < length; i++) {
            for (let j = 0, len = array[i].arr.length; j < len; j++) {
                if (array[i].arr[j].value === array[i].compare) {
                    array[i].arr[j].selected = true;
                } else {
                    array[i].arr[j].selected = false;
                }
            }
        }
    }

    onBeforeMount(() => {
        _onInit();
    })

    return {
        ...toRefs(data),
        times,
        speed,
        accuracy,
        progress,
        onRemindClick,
        onSelectOptionEvent
    }
}