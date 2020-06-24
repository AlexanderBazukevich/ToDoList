export class Tabs {
    constructor(container) {
        this.tabsItems = document.querySelectorAll('.tabs__item');
        this.tabsItem = document.querySelector('.tabs__item');
        this.container = container;
    }

    swipeTabs() {
        let index = this.getSelectedTabIndex(event);
        let swipeLength = index * this.container.offsetWidth;
        this.container.style.marginLeft = `-${swipeLength}px`;
    }

    getSelectedTabIndex(event) {
        let e = event.target;
        
        if (e.className === this.tabsItem.className) {
            return Array.prototype.indexOf.call(this.tabsItems, e);
        }

        while (e.parentElement.className !== this.tabsItem.className) {
            e = e.parentElement;
        }
        return Array.prototype.indexOf.call(this.tabsItems, e.parentElement);
    }
}