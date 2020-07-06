import { BaseComponent } from "../base/base.component.js";

const template = `<span class="icon {{class}}">
    <i class="fas fa-{{icon}}"></i>
</span>`

export class Icon extends BaseComponent {
    /**
     * Icon component
     * @param { {icon: string, class: string} } data 
     */
    constructor(data) {
        if (!data.class) {
            throw `Class argument ${data.class}`
        }
        super(data);
    }
}

Icon.prototype.template = template;