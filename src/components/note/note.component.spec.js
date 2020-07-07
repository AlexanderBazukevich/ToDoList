import { Note } from "./note.component.js";
export function NoteTest () {
    // #1
    try {
        const message = `Component should rendered`;
        (() => {
            let component = new Note({date: "ddd", description: "aege", title: "aegg", icon: "aegg"});
            component.render()
        })(message)
        console.warn(message);
    } catch (error) {
        console.error(error);
    }
}