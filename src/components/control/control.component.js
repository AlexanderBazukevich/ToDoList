import { BaseComponent } from "../base/base.component.js"
import { Icon } from "../icon/icon.component.js"

const template = `<div class="control">
    <label class="control__label">
        <input class="control__field" type="checkbox" hidden="true">
        [[icon]]
    </label>
</div>`

export class Control extends BaseComponent {
    constructor(data) {
        super(data);
        this.iconComponent = Icon;
    }
}

Control.prototype.template = template;