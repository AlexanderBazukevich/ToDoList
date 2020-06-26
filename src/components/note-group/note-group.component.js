import { Note } from "../note/note.component.js";
import { BaseComponent } from "../base/base.component.js";

const template = `<div class="note-group">
        <span class="note-group__title">{{date}}</span>
        {{notes}}
    </div>`

export class NoteGroup extends BaseComponent {
    /**
     * Note Group Contstructor
     * @param { {date: string, notes: Notes[]} } data 
     */
    constructor(data) {
        super(data);
        this.data = {
            '{{date}}' : data.date,
            '{{notes}}' : data.notes,
        };
    }

    render() {
        let notes = "";
        this.data['{{notes}}'].forEach( note => {
            notes += (new Note(note)).renderAsString();
        });
        this.data["{{notes}}"] = notes;

        return super.render(template);
    }
}