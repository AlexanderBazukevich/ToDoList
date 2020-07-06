import { BaseComponent } from "../base/base.component.js"
import { Icon } from "../icon/icon.component.js"

const template = `<div class="control">
    <label class="control__label">
        <input class="control__field" type="{{type}}" hidden="true">
        [[icon as iconData]]
    </label>
</div>`

export class Control extends BaseComponent {
    /**
     * 
     * @param { {type: 'checkbox' | 'text' | 'radio', iconData: [{icon: string, class: string}] } } data
     */
    constructor(data) {
        super(data);
        this.iconComponent = Icon;
    }
}

Control.prototype.template = template;