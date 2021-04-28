import { Ref, ref, SetupContext, reactive, toRefs } from 'vue';
import { IKeyfield, EKEY_VARIATION } from '@/types';
import { useKeyfieldHook } from '@/hooks/keyfields';

interface IPicker {
    pale: string[];
    grey: string[];
    ashy: string[];
}

export function useIndication({ emit }: SetupContext) {

    let _picker: IPicker = {
        pale: ['1-4','1-9','2-4','2-9','3-4','3-9','4-4','4-9','5-5'],         // 浅灰
        grey: ['1-3','1-10','2-3','2-10','3-3','3-10','4-3','4-10','5-6'],     // 灰
        ashy: ['1-5','1-6','2-5','2-6','3-5','3-6','4-5','4-6']                // 深灰
    }

    let _steps = [
        {
            id: 1,
            style: 'step-one',
            text: '查看练习任务数据'
        },
        {
            id: 2,
            style: 'step-two',
            text: '上拉菜单可设置练习内容',
        },
        {
            id: 3, 
            style: 'step-three',
            text: '点击切换显示或隐藏键位提示'
        },
        {
            id: 4,
            style: 'step-four',
            text: '练习内容，正确输入第一个字符任务计时开始'
        }
    ];

    let keyboard: Ref<IKeyfield[]> = ref(useKeyfieldHook());

    let data = reactive({
        style_name: 'step-one',
        show_text: '查看练习任务数据',
        step_text: '下一步'
    })

    for (let i = 0, length = keyboard.value.length; i < length; i++) {
        for (let k in _picker) {
            let index = k as keyof IPicker;
            _picker[index].forEach(id => {
                if (id === keyboard.value[i].id) {
                    switch(index) {
                        case 'pale':
                            keyboard.value[i].variation = EKEY_VARIATION.PALE;
                            break;
                        case 'grey':
                            keyboard.value[i].variation = EKEY_VARIATION.GREY;
                            break;
                        case 'ashy':
                            keyboard.value[i].variation = EKEY_VARIATION.ASHY;
                            break;
                    }
                }
            });
        }
    }

    function onStepClick(): void {
        let index: number = _steps.findIndex(v => v.style === data.style_name) + 1;
        if (index >= _steps.length) {
            onBackwardClick();
        } else {
            data.style_name = _steps[index].style;
            data.show_text = _steps[index].text;
            data.step_text = _steps[index].style === 'step-four' ? '开始体验' : '下一步';
        }
    }

    function onBackwardClick(): void {
        emit('changeDisplay');
    }

    return {
        keyboard,
        ...toRefs(data),
        onBackwardClick,
        onStepClick
    }
}