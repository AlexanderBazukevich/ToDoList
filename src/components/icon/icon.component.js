import { BaseComponent } from "../base/base.component.js";

const template = `<span class="icon{{classes}}">
    <i class="fas fa-{{icon}}"></i>
</span>`

export class Icon extends BaseComponent {
    constructor(data) {
        super(data);
    }
}

Icon.prototype.template = template;

// icon_note
// icon_note icon_small icon_halo_note
// check-circle