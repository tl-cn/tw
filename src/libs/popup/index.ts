import { createApp, App, inject } from 'vue';
import GlobalPopup from './GlobalPopup.vue';
import { IComponentCustomInstance } from '@/types';

const _name: Symbol = Symbol(GlobalPopup.name);

export default {
    install(app: App) {
        const _node: HTMLDivElement = document.createElement('div');
        _node.id = 'popup';
        document.body.appendChild(_node);

        const gpp: App<Element> = createApp(GlobalPopup, {
            remove() {
                gpp.unmount();
                document.body.removeChild(_node);
            }
        })
        const gm: IComponentCustomInstance = gpp.mount(_node) as IComponentCustomInstance;
        app.provide(_name, gm);
        app.component(GlobalPopup.name, GlobalPopup);
    }
}

export function usePopup(): IComponentCustomInstance {
    return inject(_name) as IComponentCustomInstance;
}