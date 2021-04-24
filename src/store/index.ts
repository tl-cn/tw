import { createStore } from 'vuex';
import states from './states';
import actions from './actions';
import mutations from './mutations';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: states,
    mutations: mutations,
    actions: actions,
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        key: 'TYPEWRITER',
        reducer: (state) => {
            return {
                sort: state.sort,
                counter: state.counter,
                letter: state.letter,
                duration: state.duration,
                prompt: state.prompt
            }
        }
    })]
})
