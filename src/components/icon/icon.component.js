import { BaseComponent } from "../base/base.component.js";

export class Icon extends BaseComponent {
    /**
     * Icon component
     * @param { {icon: string, class: string} } data 
     */
    constructor(data) {
        if (data === undefined) {
            throw `Arguments not provided`
        }
        if (!data.icon) {
            throw `Icon component: Icon argument ${data.icon}`
        }
        super(data);
        this.template = `<span class="icon {{class}}">
            <i class="fas fa-{{icon}}"></i>
        </span>`
    }
}
