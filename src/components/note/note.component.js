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
        this.data = {
            '{{title}}' : data.title,
            '{{description}}' : data.description,
            '{{group}}' : data.group,
        };
    }

    render() {
        return super.render(template);
    }

    renderAsString() {
        return this.render().firstChild.outerHTML;
    }
}
