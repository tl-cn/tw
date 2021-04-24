import { Ref, ref } from 'vue';
import store from '@/store';
import axios from 'axios';
import XLSX from 'xlsx';
import { IBaseSheet, ELETTER } from '@/types';


interface ICellObject {
    lowercase?: string;
    uppercase?: string;
    number?: string;
    symbol?: string;
}
interface IUseCharacters {
    onReadBaseWorkbook(): void;
    onGetBaseWords(): Array<string>;
}


const sheets: Ref<IBaseSheet> = ref({});


function _onTransformBaseSheets(buffer: ArrayBuffer): IBaseSheet {
    let lowercase = new Array<string>(),
        uppercase = new Array<string>(),
        numbers = new Array<string>(),
        symbols = new Array<string>();
    let _uint8: Uint8Array = new Uint8Array(buffer);
    let _book: XLSX.WorkBook = XLSX.read(_uint8, { type: 'array' });
    let _sheet: XLSX.WorkSheet = _book.Sheets.Sheet1;
    let _array: Array<ICellObject> = XLSX.utils.sheet_to_json(_sheet);
    for (let i = 0, length = _array.length; i < length; i++) {
        let _obj: ICellObject = _array[i];
        for (let k in _obj) {
            switch(k) {
                case 'lowercase': 
                    lowercase.push(<string>_obj[k])
                    break;
                case 'uppercase':
                    uppercase.push(<string>_obj[k]);
                    break;
                case 'number': 
                    numbers.push(String(_obj[k]));
                    break;
                case 'symbol': 
                    symbols.push(<string>_obj[k]);
                    break;
            }
        }
    }
    return { lowercase, uppercase, numbers, symbols };
}


function onReadBaseWorkbook(): void {
    const url: string = 'excel/base.xlsx';
    axios.get(url, { responseType: 'arraybuffer' }).then(res => {
        sheets.value = _onTransformBaseSheets(res.data);
    }).catch(e => {
        console.log(e);
    });
}


function onGetBaseWords(): Array<string> {
    let words = new Array<string>();
    if (Object.keys(sheets.value).length > 0) {
        switch(store.state.letter) {
            case ELETTER.ALL: 
                words = [...sheets.value.lowercase, ...sheets.value.uppercase, ...sheets.value.numbers, ...sheets.value.symbols];
                break;
            case ELETTER.LOWERCASE:
                words = sheets.value.lowercase;
                break;
            case ELETTER.UPPERCASE: 
                words = sheets.value.uppercase;
                break;
            case ELETTER.LOW_UP_CASE: 
                words = [...sheets.value.lowercase, ...sheets.value.uppercase];
                break;
            case ELETTER.NUMBER: 
                words = sheets.value.numbers;
                break;
            case ELETTER.SYMBOL:
                words = sheets.value.symbols; 
                break;
        }
    }
    return words;
}


export function useCharacterHook(): IUseCharacters {
    return {
        onReadBaseWorkbook,
        onGetBaseWords
    }
}