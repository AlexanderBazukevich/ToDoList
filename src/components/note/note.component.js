import { BaseComponent } from "../base/base.component.js";
import { Control } from "../control/control.component.js";
import { Icon } from "../icon/icon.component.js";

const template = `<div class="note note_shadowed">
    [[icon]]
    <div class="note__content">
        <span class="note__title">{{title}}</span>
        <span class="note__description">{{description}}</span>
    </div>
    [[control]]
</div>`

export class Note extends BaseComponent {
    /**
     * Note Constructor
     * @param {{title: string, description: string, date: string, group: string}} data
     */
    constructor(data) {
        super(data);
        this.controlComponent = Control;
        this.iconComponent = Icon;
    }
}

Note.prototype.template = template;

