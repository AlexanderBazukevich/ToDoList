import { BaseComponent } from "../base/base.component.js"
import { Icon } from "../icon/icon.component.js"

const template = `<button class="button" type="{{type}}">
    [[icon]]
</button>`

export class Button extends BaseComponent {
    constructor(data) {
        super(data)
        this.iconComponent = Icon;
    }
}

Button.prototype.template = template;