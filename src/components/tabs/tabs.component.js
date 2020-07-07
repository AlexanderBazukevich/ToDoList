import { BaseComponent } from "../base/base.component.js";
import { TabItem } from "./tab-item.component.js";
import { TabContent } from "../tabs/tab-content.component.js";

const template = `<div class="tabs">
    [[tabItem in items]]
    <div class="tabs__slider">
        [[tabContent in items]]
    </div>
</div>`

export class Tabs extends BaseComponent {
    /**
     * 
     * @param {items: {title: string, selector: string, checked: string}[]} data 
     */
    constructor(data) {
        super(data);
        this.tabItemComponent = TabItem;
        this.tabContentComponent = TabContent;
    }

    onInit(container) {
        container.querySelectorAll(".tabs__select").forEach( element => {
            element.addEventListener('change', this.onClick);
        });
        this.slider = container.querySelector('.tabs__slider');
    }

    onClick = (event) => {
        let index = this.getSelectedTabIndex(event.target);
        if (index !== -1) {
            let swipeLength = index * this.slider.offsetWidth;
            this.slider.firstElementChild.style.marginLeft = `-${swipeLength}px`;
        }
    }

    getSelectedTabIndex(e) {
        return Array.prototype.indexOf.call(this.container.children, e.parentElement);
    }
}

Tabs.prototype.template = template;
