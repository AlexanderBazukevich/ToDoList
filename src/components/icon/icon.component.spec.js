import { Icon } from "./icon.component.js";
export function IconTest () {
    // #1
    try {
        const message = `Component should not be created without arguments`;
        ((message) => {
            let component;

            try {
                component = new Icon();
            } catch (error) {
                // we expect error
            }

            if (component) {
                throw `Error: ${message}`;
            }
        })(message)
        console.warn(message);
    } catch (error) {
        console.error(error);
    }

    // #2
    try {
        const message = `Component should not be created without 'icon' and 'class' arguments`;
        ((message) => {
            let component;
            let component2;

            try {
                component2 = new Icon({class: "asdfa", icon: "aegeg"})
                component = new Icon({});
            } catch (error) {
                // we expect error
            }

            if (component) {
                throw `Error: ${message}`;
            }

            if (!component2) {
                throw `Component should be created with icon and class arguments`
            }
        })(message)
        console.warn(message);
    } catch (error) {
        console.error(error);
    }

    // #3
    try {
        const message = `Should have render method`;
        ((message) => {
            let component = new Icon({class: 'some', icon: 'shopping-ba'});

            if (typeof component.render !== 'function') {
                throw `Error: ${message}`;
            }
        })(message)
        console.warn(message);
    } catch (error) {
        console.error(error);
    }
}