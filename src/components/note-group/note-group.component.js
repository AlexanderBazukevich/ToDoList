import { Note } from "../note/note.component.js";

const template = `<div class="note-group">
        <span class="note-group__title">{{date}}</span>
        {{notes}}
    </div>`

export class NoteGroup {
    /**
     * Note Group Contstructor
     * @param { {date: string, notes: Notes[]} } data 
     */
    constructor(data) {
        this.data = data;
    }

    render() {
        let localTemplate = template;
        let fragment = document.createDocumentFragment();
        let wrapper = document.createElement('div');

        localTemplate = localTemplate.replace('{{date}}', this.data.date);

        let notes = "";
        this.data.notes.forEach( note => {
            notes += (new Note(note)).render(true);
        });

        localTemplate = localTemplate.replace('{{notes}}', notes);

        wrapper.innerHTML = localTemplate;

        fragment.append(wrapper.firstChild);

        return fragment;
    }
}