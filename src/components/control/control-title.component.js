import { BaseComponent } from '../base/base.component.js'

const template = `<span class="control__title {{class}}">{{title}}</span>`

export class ControlTitle extends BaseComponent {
    constructor(data) {
        super(data)
    }
}

ControlTitle.prototype.template = template;