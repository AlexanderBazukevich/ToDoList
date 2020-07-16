import { BaseComponent } from "../base/base.component.js"
import { ControlGroupItem } from "../control-group/control-group-item.component.js"
import { Control } from "../control/control.component.js"

const template = `<div class="content">
    <form data-dom="add-note">
        [[control as controlData]]
    </form>
    <div class="control-group">
        [[controlGroupItem in items]]
    </div>
    `

export class Content extends BaseComponent {
    constructor(data) {
        super(data);
        this.controlGroupItemComponent = ControlGroupItem;
        this.controlComponent = Control;

        this.data.items = data;
        this.data.items.forEach(item => {
            item.class = "control-group__item_w4";
            item.controlData = {
                type: "radio",
                labelClass: "",
                fieldClass: "",
                name: "group",
                placeholder: "",
                hidden: "hidden",
                iconData: {
                    icon: item.icon,
                    class: "icon icon_main icon_big icon_halo_main"
                },
                titleData: {
                    title: item.title,
                    class: "control__title_small"
                }
            }
        });

        this.data.controlData = {
            type: "text",
            labelClass: "",
            fieldClass: "control__field_main control__field_action_append",
            name: "",
            placeholder: "Add note",
            hidden: "",
            buttonData: {
                type: "submit",
                iconData: {
                    icon: "plus",
                    class: "icon"
                }
            }
        };
    }
}

Content.prototype.template = template;