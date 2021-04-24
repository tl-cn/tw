import { Ref, ref, onMounted } from 'vue';
import { IKeyfield } from '@/types';
import { useCharacterHook } from '@/hooks/characters';
import KS from '@/hooks/keyshelf';


interface IUseReference {
    contrast: Ref<IKeyfield[]>;
}


export function useReference(): IUseReference {

    const contrast: Ref<IKeyfield[]> = ref([]);
    KS.onSetContrastList(contrast.value);

    const { onReadBaseWorkbook, onGetBaseWords } = useCharacterHook();
    onReadBaseWorkbook();

    function _tick(): void {
        let words = onGetBaseWords();
        if (words.length > 0) {
            KS.onCreateReferenceWords(words);
        } else {
            setTimeout(() => { _tick(); }, 100);
        }
    };

    onMounted(() => {
        _tick();
    })

    return {
        contrast
    }
}