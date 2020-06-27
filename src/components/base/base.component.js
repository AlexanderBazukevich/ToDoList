export class BaseComponent {
    constructor(data) {
        this.data = data;
    }

    render() {
        let fragment = document.createDocumentFragment();
        let wrapper = document.createElement('div');

        wrapper.innerHTML = this.template;

        const props = this.grabProperties();
        props.forEach( property => {
            if (property in this.data) {
                wrapper.innerHTML = wrapper.innerHTML.replace(`{{${property}}}`, this.data[property]);
            }
        });

        const components = this.grabComponents();
        components.forEach( component => {
            if(this.isComponentForArray(component)) {
                const data = this.getComponentDataForArray(component);
                const cpm = this.getComponentForArray(component);
                let html = "";
                data.forEach( value => {
                    const componentClass = this[`${cpm}Component`];
                    html += new componentClass(value).renderAsString();
                })

                wrapper.innerHTML = wrapper.innerHTML.replace(`[[${component}]]`, html);
            }

            if (`${component}Component` in this) {
                const componentClass = this[`${component}Component`];
                wrapper.innerHTML = wrapper.innerHTML.replace(`[[${component}]]`, new componentClass(this.data).renderAsString());
            }
        });

        fragment.append(wrapper.firstChild);

        return fragment;
    }

    renderAsString() {
        return this.render().firstChild.outerHTML;
    }

    grabProperties() {
        const props = (this.template.match(/{{\w*}}/g) || []).join("").replace(/{{/g, "").split("}}");
        props.length = props.length - 1;    
        return props;
    }

    grabComponents() {
        const components = (this.template.match(/\[\[.*\]\]/g) || []).join("").replace(/\]\]/g, "").split("[[");
        components.shift();
        return components;
    }

    isComponentForArray(component) {
        return component.indexOf("as") !== -1;
    }

    getComponentDataForArray(component) {
        const dataName = component.split(" as ")[1];
        return this.data[dataName];
    }

    getComponentForArray(component) {
        const name = component.split(" as ")[0];
        return name;
    }
}