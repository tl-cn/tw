import { Ref, ref, onMounted, onBeforeUnmount, inject } from 'vue';
import { Store, useStore } from 'vuex';
import { IKeyfield, EDURATION, EKEY_VARIATION, IComponentCustomInstance, ESORT, ECOUNTER, ELETTER } from '@/types';
import { useKeyfieldHook } from '@/hooks/keyfields';
import BH from '@/store/behaviors';
import KS from '@/hooks/keyshelf';
import { usePopup } from '@/libs/popup';


interface IUseKeyboard {
    keyboard: Ref<IKeyfield[]>;
}


export function useKeyPanel(): IUseKeyboard {

    let _intervalId: number | null = null;
    let _startStamp: number = 0;
    let _startSwitch: boolean = false;
    let _delay: number = 0;
    let _popup: IComponentCustomInstance = usePopup();
    let _onRestart: Function = inject('restart') as Function;

    const store: Store<any> = useStore();

    const keyboard: Ref<IKeyfield[]> = ref(useKeyfieldHook());
    KS.onSetKeyboardList(keyboard.value);

    function _onCheckClickCorrect(): boolean {
        let correct: boolean = true;
        for (let i = 0, length = keyboard.value.length; i < length; i++) {
            let f: IKeyfield = keyboard.value[i];
            if ((f.variation === EKEY_VARIATION.GUIDANCE && !f.press) || (f.press && f.variation !== EKEY_VARIATION.GUIDANCE)) {
                correct = false;
            }
        }
        return correct;
    }
    
    function _onTaskProcess(condition: boolean): void {
        _delay = 0;
        store.dispatch(BH.SET_ACCOMPLISH, store.state.accomplish + 1);
        KS.onChangeContrastStyle(condition);
        if (store.state.accomplish === store.state.counter) {                               // 任务完成
            if (_intervalId !== null) {
                clearInterval(_intervalId);
                _intervalId = null;
            }
            _popup.open({
                name: 'dialog',
                success: (e: string) => {
                    if (e === 'agin') {
                        //
                    } else if (e === 'reset') {
                        store.dispatch(BH.SET_SORT, ESORT.ORDER);
                        store.dispatch(BH.SET_COUNTER, ECOUNTER.HUNDRED);
                        store.dispatch(BH.SET_LETTER, ELETTER.ALL);
                        store.dispatch(BH.SET_DURATION, EDURATION.HOLD);
                        store.dispatch(BH.SET_PROMPT, true);
                    }
                    _onRestart();
                }
            });
        }
    }

    function onKeyDownHandler(e: KeyboardEvent): void {
        if (e.keyCode === 9 || e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) {
            e.returnValue = false;
            e.preventDefault();
        }
        for (let i = 0, length = keyboard.value.length; i < length; i++) {
            let f: IKeyfield = keyboard.value[i];
            if (f.variation === EKEY_VARIATION.CAUTION) {
                keyboard.value[i].variation = EKEY_VARIATION.IDLE;
            }
            if (f.keycodes.some((code: number) => code === e.keyCode) && f.location === e.location) {
                keyboard.value[i].anim = false;
                keyboard.value[i].press = true;
                if (f.variation === EKEY_VARIATION.GUIDANCE) {                              // 点击正确
                    store.dispatch(BH.SET_CORRECT, store.state.correct + 1);
                    if (_onCheckClickCorrect()) {                                           // 点击完成
                        if (!_startSwitch) _startSwitch = true;
                        _onTaskProcess(true);
                    }
                } else {                                                                    // 点击错误
                    keyboard.value[i].variation = EKEY_VARIATION.CAUTION;
                }
                store.dispatch(BH.SET_TOTAL, store.state.total + 1);
            }
        }
    }

    function onKeyUpHandler(e: KeyboardEvent): void {
        for (let i = 0, length = keyboard.value.length; i < length; i++) {
            let f: IKeyfield = keyboard.value[i];
            if (f.keycodes.some((code: number) => code === e.keyCode) && f.location === e.location) {
                keyboard.value[i].anim = true;
                keyboard.value[i].press = false;
            }
            if (f.press && f.variation !== EKEY_VARIATION.GUIDANCE) {
                keyboard.value[i].variation = EKEY_VARIATION.CAUTION;
            }
        }
    }

    function _onIntervalProcess(): void {
        if (_intervalId === null) {
            _startStamp = (new Date()).getTime();
            _delay = 0;
            _intervalId = setInterval(() => {
                if (_startSwitch) {
                    let _stage: number = (new Date()).getTime() - _startStamp;
                    store.dispatch(BH.SET_STAGE, _stage);
                    if (store.state.duration !== EDURATION.HOLD) {
                        _delay += 1;
                        if (_delay === store.state.duration) _onTaskProcess(false);
                    }
                } else {
                    _startStamp = (new Date()).getTime();
                }
            }, 1000);
        }
    }

    onMounted(() => {
        document.onkeydown = onKeyDownHandler;
        document.onkeyup = onKeyUpHandler;

        _onIntervalProcess();
    }) 

    onBeforeUnmount(() => {
        if (_intervalId !== null) {
            clearInterval(_intervalId);
            _intervalId = null;
        };
    })

    return {
        keyboard
    }
}