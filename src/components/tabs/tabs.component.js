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

    // swipeTabs() {
    //     let index = this.getSelectedTabIndex(event);
    //     let swipeLength = index * this.container.offsetWidth;
    //     this.container.style.marginLeft = `-${swipeLength}px`;
    // }

    // getSelectedTabIndex(event) {
    //     let e = event.target;
        
    //     if (e.className === this.tabsItem.className) {
    //         return Array.prototype.indexOf.call(this.tabsItems, e);
    //     }

    //     while (e.parentElement.className !== this.tabsItem.className) {
    //         e = e.parentElement;
    //     }
    //     return Array.prototype.indexOf.call(this.tabsItems, e.parentElement);
    // }

    // showSelectedTab() {
    //     this.tabsItems.forEach( item => {
    //         item.addEventListener('click', () => {
    //             const tab = new Tabs(this.todaysNotesContainer);
    //             tab.swipeTabs();
    //         })
    //     })
    // }
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
