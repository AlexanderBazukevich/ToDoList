import { BaseComponent } from "../base/base.component.js";

const tabItemTemplate = `<label class="tabs__item">
    <input class="tabs__select" type="radio" name="tab" checked>
    <span class="tabs__title">{{title}}</span>
</label>`;
const tabContentTemplate = `<div class="tabs__content content" data-dom="{{selector}}"></div>`;
const template = `<div class="tabs">
    {{tabs}}
    <div class="tabs__slider">
    {{content}}
    </div>
</div>`

export class Tabs extends BaseComponent {
    constructor(titles, selectors, data) {
        super(data);
        this.titles = titles;
        this.selectors = selectors;
        this.tabItems;
        // this.tabsItem = document.querySelector('.tabs__item');
    }

    render() {
        this.data = {
            '{{tabs}}' : this.renderTabsItems(),
            '{{content}}' : this.renderTabsContent(),
        }
        return super.render(template);
    }

    renderTabsContent() {
        let tabContent = '';
        this.selectors.forEach( selector => {
            tabContent += tabContentTemplate.replace('{{selector}}', selector);
        });
        return tabContent;
    }

    renderTabsItems() {
        let tabItem = '';
        this.titles.forEach( title => {
            tabItem += tabItemTemplate.replace('{{title}}', title);
        });
        return tabItem;
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