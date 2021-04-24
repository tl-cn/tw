
interface ISetView {
    (): ISetView;
}

export default class Rem {
    
    static render(): void {
        const SCREENTYPE: string = ('orientationchange' in window) ? 'orientationchange' : 'resize';
        const DEFINENUMBER: number = 10;

        function setView(): ISetView {
            let width: number = document.documentElement.offsetWidth || document.documentElement.clientWidth;
            if (width < 320) {
                width = 320;
            }
            document.documentElement.style.fontSize = width / DEFINENUMBER + 'px';
            return setView;
        }
        window.addEventListener(SCREENTYPE, setView());
    }
}