import { Commit } from 'vuex';
import BH from './behaviors';
import { IStoreState, ESORT, ECOUNTER, ELETTER, EDURATION } from '../types';

interface ICtx {
    commit: Commit;
    state: IStoreState
}

export default {
    [BH.SET_SORT]({ commit }: ICtx, sort: ESORT) {
        commit(BH.SET_SORT, sort);
    },
    [BH.SET_COUNTER]({ commit }: ICtx, counter: ECOUNTER) {
        commit(BH.SET_COUNTER, counter);
    },
    [BH.SET_LETTER]({ commit }: ICtx, letter: ELETTER) {
        commit(BH.SET_LETTER, letter);
    },
    [BH.SET_DURATION]({ commit }: ICtx, duration: EDURATION) {
        commit(BH.SET_DURATION, duration);
    },
    [BH.SET_PROMPT]({ commit }: ICtx, status: boolean) {
        commit(BH.SET_PROMPT, status);
    },
    [BH.SET_STAGE]({ commit }: ICtx, stage: number) {
        commit(BH.SET_STAGE, stage);
    },
    [BH.SET_CORRECT]({ commit }: ICtx, correct: number) {
        commit(BH.SET_CORRECT, correct);
    },
    [BH.SET_TOTAL]({ commit }: ICtx, total: number) {
        commit(BH.SET_TOTAL, total);
    },
    [BH.SET_ACCOMPLISH]({ commit }: ICtx, accomplish: number) {
        commit(BH.SET_ACCOMPLISH, accomplish);
    }
}