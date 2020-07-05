import { BaseComponent } from "../base/base.component.js";

const template = `<label class="tabs__item">
<input class="tabs__select" type="radio" name="tab" {{checked}}>
<span class="tabs__title">{{title}}</span>
</label>`

export class TabItem extends BaseComponent {
    constructor(data) {
        super(data)
    }
}

TabItem.prototype.template = template;