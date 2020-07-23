import { BaseComponent } from "../base/base.component.js"
import { Icon } from "../icon/icon.component.js"
import { ControlTitle } from './control-title.component.js'

export class Control extends BaseComponent {
    /**
     * 
     * @param { {type: 'checkbox' | 'text' | 'radio', 
     * labelClass: string, 
     * fieldClass: string, 
     * name: string, 
     * placeholder: string, 
     * hidden: boolean, 
     * icon: {icon: string, class: string},
     * titleData: [{title: string, class: string}]} } data
     */
    constructor(data) {
        super(data);
        this.template = `<div class="control">
            <label class="control__label {{labelClass}}">
                <input class="control__field {{fieldClass}}" type="{{type}}"${data.name ? ' name="{{name}}"' : ''} ${data.placeholder ? ' placeholder="{{placeholder}}"' : ''} {{hidden}}>
                [[icon]]
                ${data.titleData ? '[[controlTitle as titleData]]' : ''}
            </label>
        </div>`
        this.iconComponent = Icon;
        this.controlTitleComponent = ControlTitle;
    }
}
