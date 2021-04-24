
export default function zeroize(value: number | string, symbol: boolean = false, exp: number = 2): string {
    let _minus: string = '';
    let _value: number = typeof(value) === 'number' ? value : (isNaN(Number(value)) ? 0 : Number(value));
    if (_value < 0) {
        _value *= -1;
        _minus = '-';
    } else if (_value > 0 && symbol) {
        _minus = '+';
    }
    let result: string = Math.floor(_value * Math.pow(10, exp)).toString();
    if (result.length <= exp) {
        result = result.padStart(exp + 1, '0');
    }
    return `${ _minus }${ result.substr(0, result.length - exp) }.${ result.substr(-1 * exp) }`;
}