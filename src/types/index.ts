import { readonly, Ref, ComponentPublicInstance } from 'vue';
import { EKEY_COLOR, EKEY_VARIATION, ESORT, ECOUNTER, ELETTER, EDURATION } from './enumeration';

interface ISelectOption {
    readonly id: number;
    readonly text: string;
    selected: boolean;
    readonly value: ESORT | ECOUNTER | ELETTER | EDURATION;
}

interface IKeyfield {
    readonly id: string;
    readonly keycodes: Array<number>;
    readonly location: number;
    letters: Array<string>;
    readonly appendix: string;
    color: EKEY_COLOR;
    press: boolean;
    multiple: boolean;
    anim: boolean;
    variation: EKEY_VARIATION;
    shit: boolean;
    readonly shit_position: number;
}

interface IStoreState {
    sort: ESORT;     
    counter: ECOUNTER;
    letter: ELETTER;
    duration: EDURATION;
    prompt: boolean;        
    stage: number;
    correct: number;
    total: number;
    accomplish: number; 
}

interface IBaseSheet {
    [key: string]: Array<string>;
}

interface IPopupConfig {
    show: boolean;
    shade: boolean;
    shade_click: boolean;
    shade_close: boolean;
    unfold: boolean;
    name: string;
    title: string;
    content: string;
    duration: number;
    slot: boolean;
    success: Function;
    fail: Function;
    complete: Function;
}

interface IComponentCustomInstance extends ComponentPublicInstance {
    param: Ref<IPopupConfig>;
    options: Partial<IPopupConfig>;
    open(ops?: Partial<IPopupConfig>): void;
    close(): void;
    onMaskClick(): void;
}

export {
    EKEY_COLOR, 
    EKEY_VARIATION, 
    ESORT, 
    ECOUNTER, 
    ELETTER, 
    EDURATION,
    ISelectOption,
    IKeyfield,
    IStoreState,
    IBaseSheet,
    IPopupConfig,
    IComponentCustomInstance
}