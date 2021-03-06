import { EKEY_COLOR, EKEY_VARIATION, IKeyfield } from '@/types';


export function useKeyfieldHook(contents: string[] = []): Array<IKeyfield> {
    const list: Array<IKeyfield> = [
        {
            id: '1-1',
            keycodes: [192],
            location: 0,
            letters: ['`', '~'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-2',
            // keycodes: [49, 112],
            keycodes: [49],
            location: 0,
            letters: ['1', '!'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-3',
            // keycodes: [50, 113],
            keycodes: [50],
            location: 0,
            letters: ['2', '@'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-4',
            // keycodes: [51, 114],
            keycodes: [51],
            location: 0,
            letters: ['3', '#'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-5',
            // keycodes: [52, 115],
            keycodes: [52],
            location: 0,
            letters: ['4', '$'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-6',
            // keycodes: [53, 116],
            keycodes: [53],
            location: 0,
            letters: ['5', '%'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '1-7',
            // keycodes: [54, 117],
            keycodes: [54],
            location: 0,
            letters: ['6', '^'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-8',
            // keycodes: [55, 118],
            keycodes: [55],
            location: 0,
            letters: ['7', '&'],
            border: EKEY_COLOR.GRAY,
            press: false,            
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-9',
            // keycodes: [56, 119],
            keycodes: [56],
            location: 0,
            letters: ['8', '*'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-10',
            // keycodes: [57, 120],
            keycodes: [57],
            location: 0,
            letters: ['9', '('],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-11',
            // keycodes: [48, 121],
            keycodes: [48],
            location: 0,
            letters: ['0', ')'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-12',
            // keycodes: [189, 122],
            keycodes: [189],
            location: 0,
            letters: ['-', '???'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-13',
            // keycodes: [187, 123],
            keycodes: [187],
            location: 0,
            letters: ['=', '+'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '1-14',
            keycodes: [8],
            location: 0,
            letters: ['Backspace'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '2-1',
            keycodes: [9],
            location: 0,
            letters: ['Tab'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '2-2',
            keycodes: [81],
            location: 0,
            letters: ['Q'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '2-3',
            keycodes: [87],
            location: 0,
            letters: ['W'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '2-4',
            keycodes: [69],
            location: 0,
            letters: ['E'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '2-5',
            keycodes: [82],
            location: 0,
            letters: ['R'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '2-6',
            keycodes: [84],
            location: 0,
            letters: ['T'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '2-7',
            keycodes: [89],
            location: 0,
            letters: ['Y'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-8',
            keycodes: [85],
            location: 0,
            letters: ['U'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-9',
            keycodes: [73],
            location: 0,
            letters: ['I'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-10',
            keycodes: [79],
            location: 0,
            letters: ['O'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-11',
            keycodes: [80],
            location: 0,
            letters: ['P'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-12',
            keycodes: [219],
            location: 0,
            letters: ['[', '{'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-13',
            keycodes: [221],
            location: 0,
            letters: [']', '}'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '2-14',
            keycodes: [220],
            location: 0,
            letters: ['\\', '??'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-1',
            keycodes: [20],
            location: 0,
            letters: ['Caps'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '3-2',
            keycodes: [65],
            location: 0,
            letters: ['A'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '3-3',
            keycodes: [83],
            location: 0,
            letters: ['S'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '3-4',
            keycodes: [68],
            location: 0,
            letters: ['D'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '3-5',
            keycodes: [70],
            location: 0,
            letters: ['F'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '3-6',
            keycodes: [71],
            location: 0,
            letters: ['G'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '3-7',
            keycodes: [72],
            location: 0,
            letters: ['H'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-8',
            keycodes: [74],
            location: 0,
            letters: ['J'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-9',
            keycodes: [75],
            location: 0,
            letters: ['K'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-10',
            keycodes: [76],
            location: 0,
            letters: ['L'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-11',
            keycodes: [186],
            location: 0,
            letters: [';', ':'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-12',
            keycodes: [222],
            location: 0,
            letters: ['\'', '"'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '3-13',
            keycodes: [13],
            location: 0,
            letters: ['Enter'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '4-1',
            keycodes: [16],
            letters: ['Shit'],
            location: 1,
            border: EKEY_COLOR.GREEN,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '4-2',
            keycodes: [90],
            location: 0,
            letters: ['Z'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '4-3',
            keycodes: [88],
            location: 0,
            letters: ['X'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '4-4',
            keycodes: [67],
            location: 0,
            letters: ['C'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '4-5',
            keycodes: [86],
            location: 0,
            letters: ['V'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '4-6',
            keycodes: [66],
            location: 0,
            letters: ['B'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 2
        },
        {
            id: '4-7',
            keycodes: [78],
            location: 0,
            letters: ['N'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '4-8',
            keycodes: [77],
            location: 0,
            letters: ['M'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '4-9',
            keycodes: [188],
            location: 0,
            letters: [',', '<'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '4-10',
            keycodes: [190],
            location: 0,
            letters: ['.', '>'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '4-11',
            keycodes: [191],
            location: 0,
            letters: ['/', '?'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 1
        },
        {
            id: '4-12',
            keycodes: [16],
            location: 2,
            letters: ['Shit'],
            border: EKEY_COLOR.GREEN,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-1',
            keycodes: [17],
            location: 1,
            letters: ['Ctrl'],
            border: EKEY_COLOR.ORANGE,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-2',
            keycodes: [91],
            location: 0,
            letters: ['Win'],
            border: EKEY_COLOR.YELLOW,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-3',
            keycodes: [18],
            location: 1,
            letters: ['Alt'],
            border: EKEY_COLOR.BLUE,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-4',
            keycodes: [32],
            location: 0,
            letters: ['Space'],
            border: EKEY_COLOR.GRAY,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-5',
            keycodes: [18],
            location: 2,
            letters: ['Alt'],
            border: EKEY_COLOR.BLUE,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-6',
            keycodes: [],
            location: 0,
            letters: ['Win'],
            border: EKEY_COLOR.YELLOW,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-7',
            keycodes: [93],
            location: 0,
            letters: ['Menu'],
            border: EKEY_COLOR.PURPLE,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false,
            shit_position: 0
        },
        {
            id: '5-8',
            keycodes: [17],
            location: 2,
            letters: ['Ctrl'],
            border: EKEY_COLOR.ORANGE,
            press: false,
            anim: true,
            variation: EKEY_VARIATION.IDLE,
            shit: false, 
            shit_position: 0
        }
    ];

    let fields: IKeyfield[] = contents.map(c => {
        let fs = <IKeyfield>list.find(field => field.letters.some(s => s.toLowerCase() === c.toLowerCase()));
        let rs = { ...fs };
        rs.letters = [c];
        rs.shit = RegExp(/^[A-Z]$/g).test(c) || fs.letters?.[1] === c ? true : false;
        return rs;
    });
    
    if (fields.length === 0) {
        fields = list.map(v => v);
    }

    return fields;
}