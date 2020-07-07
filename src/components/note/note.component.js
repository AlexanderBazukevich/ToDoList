import { BaseComponent } from "../base/base.component.js";
import { Control } from "../control/control.component.js";
import { Icon } from "../icon/icon.component.js";

const template = `<div class="note note_shadowed">
    [[icon as icons]]
    <div class="note__content">
        <span class="note__title">{{title}}</span>
        <span class="note__description">{{description}}</span>
    </div>
    [[control as controlData]]
</div>`

export class Note extends BaseComponent {
    /**
     * Note Constructor
     * @param { {title: string, description: string, date: string, icon: string} } data
     */
    constructor(data) {
        if (!data.description) {
            throw `Description argument ${data.description}`
        }
        super(data);
        this.controlComponent = Control;
        this.iconComponent = Icon;

        this.data.icons = {
            icon: this.data.icon,
            class: "icon_note icon_small icon_halo_note"
        }

        this.data.controlData = {
            type: "checkbox",
            iconData: {
                icon: "check-circle",
                class: "icon_note"
            }
        }
    }
}

Note.prototype.template = template;

