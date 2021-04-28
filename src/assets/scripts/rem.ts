
interface ISetView {
    (): ISetView;
}

export default class Rem {
    
    static render(): void {
        const SCREENTYPE: string = ('orientationchange' in window) ? 'orientationchange' : 'resize';
        const DEFINENUMBER: number = 10;

        function setView(): ISetView {
            let ratio: number = 1.825;
            let width: number = document.documentElement.offsetWidth || document.documentElement.clientWidth;
            let height: number = document.documentElement.offsetHeight || document.documentElement.clientHeight;
            if (width < 320) {
                width = 320;
            } 
            if (width > height * ratio) {
                width = Math.floor(height * ratio);
            }
            document.documentElement.style.fontSize = width / DEFINENUMBER + 'px';
            return setView;
        }
        window.addEventListener(SCREENTYPE, setView());
    }
}