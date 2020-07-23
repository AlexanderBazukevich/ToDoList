import { Note } from "../note/note.component.js";
import { BaseComponent } from "../base/base.component.js";

export class NoteGroup extends BaseComponent {
    /**
     * Note Group Contstructor
     * @param { {date: string, notes: Notes[]} } data 
     */
    constructor(data) {
        super(data);
        this.template = `<div class="note-group">
            <span class="note-group__title">{{date}}</span>
            [[note in notes]]
        </div>`
        this.noteComponent = Note;
    }
}
