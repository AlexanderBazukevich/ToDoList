import { BaseComponent } from "../base/base.component.js";

const template = `<span class="{{class}}">
    <i class="fas fa-{{icon}}"></i>
</span>`

export class Icon extends BaseComponent {
    /**
     * Icon component
     * @param { {icon: string, class: string} } data 
     */
    constructor(data) {
        if (data === undefined) {
            throw `Arguments not provided`
        }
        if (!data.class) {
            throw `Icon component: Class argument ${data.class}`
        }
        if (!data.icon) {
            throw `Icon component: Icon argument ${data.icon}`
        }
        super(data);
    }
}

Icon.prototype.template = template;