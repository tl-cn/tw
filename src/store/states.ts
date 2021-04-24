import { ESORT, ECOUNTER, ELETTER, EDURATION, IStoreState } from '../types';

export default <IStoreState>{
    sort: ESORT.ORDER,     
    counter: ECOUNTER.HUNDRED,
    letter: ELETTER.ALL,
    duration: EDURATION.HOLD,
    prompt: true,                   // true:键盘提示  false:不提示
    stage: 0,                       // 维持时长
    correct: 0,                     // 输入正确数
    total: 0,                       // 输入总数
    accomplish: 0                   // 完成数
}