
export default class Debounce {

    private _timeoutId: number | null = null;

    public use(callback: Function, delay: number = 300, immediate: boolean = false) {
        return (...args: any) => {
            if (immediate && this._timeoutId === null) {
                callback.apply(this, args);
            } 
            if (this._timeoutId !== null) clearTimeout(this._timeoutId);
            this._timeoutId = setTimeout(() => {
                callback.apply(this, args);
                this._timeoutId = null;
            }, delay);
        }
    }
}