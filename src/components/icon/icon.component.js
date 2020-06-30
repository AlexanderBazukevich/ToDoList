import { BaseComponent } from "../base/base.component.js";

const template = `<span class="icon icon_note">
    <i class="fas fa-check-circle"></i>
</span>`

export class Icon extends BaseComponent {
    constructor(data) {
        super(data);
    }
}

Icon.prototype.template = template;
