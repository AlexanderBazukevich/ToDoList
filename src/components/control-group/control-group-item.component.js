import { BaseComponent } from "../base/base.component.js"
import { Control } from "../control/control.component.js";

const template = `<div class="control-group__item {{class}}">
    [[control as controlData]]
</div>`

export class ControlGroupItem extends BaseComponent {
    /**
     * 
     * @param { {class: string, controlData: {}}} data 
     */
    constructor(data){
        super(data);
        this.controlComponent = Control;
    }
}

ControlGroupItem.prototype.template = template;