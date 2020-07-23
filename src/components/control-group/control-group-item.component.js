import { BaseComponent } from "../base/base.component.js"
import { Control } from "../control/control.component.js";

export class ControlGroupItem extends BaseComponent {
    /**
     * 
     * @param { {class: string, control: {}}} data 
     */
    constructor(data){
        super(data);
        this.template = `<div class="control-group__item {{class}}">
            [[control]]
        </div>`
        this.controlComponent = Control;
    }
}
