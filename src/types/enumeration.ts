enum EKEY_COLOR {
    GRAY = 'gray',
    ORANGE = 'orange',
    GREEN = 'green',
    YELLOW = 'yellow',
    BLUE = 'blue'
}

enum EKEY_VARIATION {
    IDLE = 'idle',
    GUIDANCE = 'guidance',              // 指示
    CAUTION = 'caution',                // 错误
    POINT = 'point',                    // 闪烁
    CORRECT = 'correct',                // 正确
    OVERTIME = 'overtime'               // 超时
}

enum ESORT {
    ORDER = 'order',                    // 顺序
    RANDOM = 'random'                   // 随机
}

enum ECOUNTER {
    HUNDRED = 100,                      // 100个字符
    EIGHTY = 80,
    SIXTY = 60,
    FIFTY = 50,
    FORTY = 40,
    THIRTY = 30,
    TWENTY = 20,
    TEN = 10    
}

enum ELETTER {
    ALL = 'all',                        // 全部
    LOWERCASE = 'lowercase',            // 英文小写
    UPPERCASE = 'uppercase',            // 大写
    LOW_UP_CASE = 'lower_upper_case',   // 大小写
    NUMBER = 'number',                  // 数字
    SYMBOL = 'symbol'                   // 符号
}

enum EDURATION {
    ONE = 1,                            // 提示1秒
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    HOLD = 0                            // 一直提示
}

export {
    EKEY_COLOR,
    EKEY_VARIATION,
    ESORT,
    ECOUNTER,
    ELETTER,
    EDURATION
}