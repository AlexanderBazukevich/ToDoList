import { BaseComponent } from "../base/base.component.js";
import { TabItem } from "./tab-item.component.js";
import { TabContent } from "./tab-content.component.js";

export class Tabs extends BaseComponent {
    /**
     * 
     * @param {items: {title: string, selector: string, checked: bool}[]} data 
     */
    constructor(data) {
        super(data);
        this.template = `<div class="tabs">
            [[tabItem in items]]
            <div class="tabs__slider">
                [[tabContent in items]]
            </div>
        </div>`
        this.tabItemComponent = TabItem;
        this.tabContentComponent = TabContent;
    }

    onInit() {
        document.querySelectorAll(".tabs__select").forEach( element => {
            element.addEventListener('change', this.onChange);
        });
        this.slider = document.querySelector('.tabs__slider');
    }

    onChange = (event) => {
        let index = this.getSelectedTabIndex(event.target);
        if (index !== -1) {
            let swipeLength = index * this.slider.offsetWidth;
            this.slider.firstElementChild.style.marginLeft = `-${swipeLength}px`;
        }
    }

    getSelectedTabIndex(e) {
        return Array.prototype.indexOf.call(document.querySelector('.tabs').children, e.parentElement);
    }
}
