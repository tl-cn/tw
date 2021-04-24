import BH from './behaviors';
import { IStoreState, ESORT, ECOUNTER, ELETTER, EDURATION } from '@/types';

export default {
    [BH.SET_SORT](state: IStoreState, sort: ESORT) {
        state.sort = sort;
    },
    [BH.SET_COUNTER](state: IStoreState, counter: ECOUNTER) {
        state.counter = counter;
    },
    [BH.SET_LETTER](state: IStoreState, letter: ELETTER) {
        state.letter = letter;
    },
    [BH.SET_DURATION](state: IStoreState, duration: EDURATION) {
        state.duration = duration;
    },
    [BH.SET_PROMPT](state: IStoreState, status: boolean) {
        state.prompt = status;
    },
    [BH.SET_STAGE](state: IStoreState, stage: number) {
        state.stage = stage;
    },
    [BH.SET_CORRECT](state: IStoreState, correct: number) {
        state.correct = correct;
    },
    [BH.SET_TOTAL](state: IStoreState, total: number) {
        state.total = total;
    },
    [BH.SET_ACCOMPLISH](state: IStoreState, accomplish: number) {
        state.accomplish = accomplish;
    }
}