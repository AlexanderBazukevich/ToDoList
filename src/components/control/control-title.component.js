import { BaseComponent } from '../base/base.component.js'

export class ControlTitle extends BaseComponent {
    constructor(data) {
        super(data)
        this.template = `<span class="control__title {{class}}">{{title}}</span>`
    }
}