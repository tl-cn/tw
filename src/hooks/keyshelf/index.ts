import { reactive } from 'vue';
import store from '@/store';
import { IKeyfield, ESORT, EKEY_VARIATION } from '@/types';
import { useKeyfieldHook } from '@/hooks/keyfields';


interface IKeyshelfData {
    keyboard: Array<IKeyfield>;
    contrast: Array<IKeyfield>;
}


let base_words = new Array<string>(),
    usable_words = new Array<string>();

const data: IKeyshelfData = reactive({
    keyboard: [],
    contrast: []
});


function onSetKeyboardList(list: Array<IKeyfield>): void {
    data.keyboard = list;
}


function onSetContrastList(list: Array<IKeyfield>): void {
    data.contrast = list;
}


function onCreateReferenceWords(words?: string[]): void {
    if (words) {
        base_words = words.map(v => v);
        usable_words = words.map(v => v);
    }
    let diff: number = store.state.counter - store.state.accomplish;
    let display: number = diff >= 5 ? 5 : diff;
    if (usable_words.length < display) {
        if (usable_words.length + base_words.length <= diff) {
            usable_words = [...usable_words, ...base_words];
        } else {
            let res: number = usable_words.length + base_words.length - diff;
            usable_words = [...usable_words, ...base_words.filter((_, i) => i <= res - 1)];
        }
    }
    let _contrast = new Array<string>();
    while(_contrast.length < display) {
        if (store.state.sort === ESORT.ORDER) {
            let _s: string | undefined = usable_words.shift();
            if (_s) _contrast.push(_s);
        } else if (store.state.sort === ESORT.RANDOM) {
            let index: number = Math.round(Math.random() * (usable_words.length - 1));
            _contrast.push(usable_words[index]);
            usable_words.splice(index, 1);
        }
    }
    useKeyfieldHook(_contrast, false).forEach((v, i) => {
        data.contrast[i] = v;
        if (i === 0) {
            data.contrast[0].variation = EKEY_VARIATION.POINT;
            onSetKeyfieldGuidance();
        }
    });
}


/**
 * @param condition true:正确  false:超时
 */
function onChangeContrastStyle(condition: boolean): void {
    let index: number = data.contrast.findIndex(f => f.variation === EKEY_VARIATION.POINT);
    if (index > -1) {
        data.contrast[index].variation = condition ? EKEY_VARIATION.CORRECT : EKEY_VARIATION.OVERTIME;
        if (index + 1 < data.contrast.length) {
            data.contrast[index + 1].variation = EKEY_VARIATION.POINT;
            onSetKeyfieldGuidance();
        } else if (store.state.accomplish < store.state.counter) {
            onCreateReferenceWords();
        }
    }
}


function onSetKeyfieldGuidance(): void {
    let twinkle: IKeyfield | undefined = data.contrast.find(c => c.variation === EKEY_VARIATION.POINT);
    for (let i = 0, length = data.keyboard.length; i < length; i++) {
        let f: IKeyfield = data.keyboard[i];
        if (twinkle && ((twinkle.id === f.id) || (twinkle.shit && twinkle.shit_position === f.location && f.keycodes[0] === 16))) {
            data.keyboard[i].variation = EKEY_VARIATION.GUIDANCE;
        } else {
            data.keyboard[i].variation = EKEY_VARIATION.IDLE;
        }
    }
}


export default {
    onSetKeyboardList,
    onSetContrastList,
    onCreateReferenceWords,
    onChangeContrastStyle,
    onSetKeyfieldGuidance
}