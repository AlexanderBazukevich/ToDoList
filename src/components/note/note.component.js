import { BaseComponent } from "../base/base.component.js";
const template = `<div class="note note_shadowed">
    <span class="icon icon_note icon_small icon_halo_note"><i class="fas fa-{{group}}"></i></span>
    <div class="note__content">
        <span class="note__title">{{title}}</span>
        <span class="note__description">{{description}}</span>
    </div>
    <div class="control">
        <label class="control__label">
            <input class="control__field" type="checkbox" hidden="true">
            <span class="icon icon_note">
                <i class="fas fa-check-circle"></i>
            </span>
        </label>
    </div>
</div>`

export class Note extends BaseComponent {
    /**
     * Note Constructor
     * @param {{title: string, description: string, date: string, group: string}} data
     */
    constructor(data) {
        super(data);
    }

    render() {
        const result = super.render();
        result.firstChild.addEventListener('click', this.onClick)
        return result;
    }

    onInit() {
        this.conainer.addEventListener('click', this.onClick)
    }

    onClick = () => {
        console.log(this)
    }
}

Note.prototype.template = template;