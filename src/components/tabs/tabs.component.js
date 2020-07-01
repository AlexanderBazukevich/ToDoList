import { BaseComponent } from "../base/base.component.js";

const template = `<div class="tabs">
    [[tabItem as items]]
    <div class="tabs__slider">
        [[tabContent as items]]
    </div>
</div>`

export class Tabs extends BaseComponent {
    /**
     * 
     * @param {items: {title: string, selector: string}[]} data 
     */
    constructor(data) {
        super(data);
        this.tabItemComponent = TabItem;
        this.tabContentComponent = TabContent;
    }

    onInit(container) {
        container.addEventListener('click', this.onClick);
    }

    onClick = () => {
        let slider = document.querySelector('.tabs__slider');
        let index = this.getSelectedTabIndex(event);
        if (index !== false) {
            let swipeLength = index * slider.offsetWidth;
            slider.firstElementChild.style.marginLeft = `-${swipeLength}px`;
        }
    }

    getSelectedTabIndex(event) {
        let e = event.target;
        let tabSelectors = document.querySelectorAll('.tabs__select');

        if (e.className === 'tabs__select') {
            return Array.prototype.indexOf.call(tabSelectors, e);
        } else {
            return false;
        }
    }
}

Tabs.prototype.template = template;

class TabItem extends BaseComponent {
    constructor(data) {
        super(data)
    }
}

TabItem.prototype.template = `<label class="tabs__item">
    <input class="tabs__select" type="radio" name="tab">
    <span class="tabs__title">{{title}}</span>
</label>`

class TabContent extends BaseComponent {
    constructor(data) {
        super(data)
    }
}

TabContent.prototype.template = `<div class="tabs__content content" data-dom="{{selector}}-todos"></div>`
