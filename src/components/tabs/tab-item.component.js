import { BaseComponent } from "../base/base.component.js";

export class TabItem extends BaseComponent {
    /**
     * 
     * @param { {title: string, checked: boolean} } data 
     */
    constructor(data) {
        super(data);
        this.template = `<label class="tabs__item">
            <input class="tabs__select" type="radio" name="tab" {{checked}}>
            <span class="tabs__title">{{title}}</span>
        </label>`
    }
}
