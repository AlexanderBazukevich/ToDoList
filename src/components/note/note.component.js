import { BaseComponent } from "../base/base.component.js";
import { Control } from "../control/control.component.js"
const template = `<div class="note note_shadowed">
    <span class="icon icon_note icon_small icon_halo_note"><i class="fas fa-{{group}}"></i></span>
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
    }

    // render() {
    //     const result = super.render();
    //     result.firstChild.addEventListener('click', this.onClick)
    //     return result;
    // }

    // onInit() {
    //     this.container.addEventListener('click', this.onClick)
    // }

    // onClick = () => {
    //     console.log(this)
    // }
}

Note.prototype.template = template;

