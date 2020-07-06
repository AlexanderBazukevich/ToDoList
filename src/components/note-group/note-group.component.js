import { Note } from "../note/note.component.js";
import { BaseComponent } from "../base/base.component.js";

const template = `<div class="note-group">
        <span class="note-group__title">{{date}}</span>
        [[note as notes]]
    </div>`

export class NoteGroup extends BaseComponent {
    /**
     * Note Group Contstructor
     * @param { {date: string, notes: Notes[]} } data 
     */
    constructor(data) {
        super(data);
        this.noteComponent = Note;
    }
}

NoteGroup.prototype.template = template