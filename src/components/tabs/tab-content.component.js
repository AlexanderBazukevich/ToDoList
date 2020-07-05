import { BaseComponent } from "../base/base.component.js";

const template = `<div class="tabs__content content" data-dom="{{selector}}-todos"></div>`

export class TabContent extends BaseComponent {
    constructor(data) {
        super(data)
    }
}

TabContent.prototype.template = template;