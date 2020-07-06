import { Icon } from "./icon.component.js";
export function IconTest () {
    // #1
    try {
        const message = `Component should not be created without 'class' argument`;
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