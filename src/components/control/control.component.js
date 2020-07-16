import { BaseComponent } from "../base/base.component.js"
import { Icon } from "../icon/icon.component.js"
import { ControlTitle } from './control-title.component.js'
import { Button } from '../button/button.component.js'

const template = `<div class="control">
    <label class="control__label {{labelClass}}">
        <input class="control__field {{fieldClass}}" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}" {{hidden}}>
        [[button as buttonData]]
        [[icon as iconData]]
        [[controlTitle as titleData]]
    </label>
</div>`

export class Control extends BaseComponent {
    /**
     * 
     * @param { {type: 'checkbox' | 'text' | 'radio', 
     * labelClass: string, 
     * fieldClass: string, 
     * name: string, 
     * placeholder: string, 
     * hidden: boolean, 
     * buttonData: [{type: string, iconData: [{icon: string, class: string}]}], 
     * iconData: [{icon: string, class: string}],
     * titleData: [{title: string, class: string}]} } data
     */
    constructor(data) {
        super(data);
        this.iconComponent = Icon;
        this.controlTitleComponent = ControlTitle;
        this.buttonComponent = Button;
    }
}

Control.prototype.template = template;