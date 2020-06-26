export class BaseComponent {
    constructor(data) {
        this.data = data;
    }

    render(template) {
        let fragment = document.createDocumentFragment();
        let wrapper = document.createElement('div');

        wrapper.innerHTML = template;
        Object.keys( this.data ).forEach( key => {
            wrapper.innerHTML = wrapper.innerHTML.replace(`${key}`, this.data[key]);
        })
        fragment.append(wrapper.firstChild);

        return fragment;
    }
}