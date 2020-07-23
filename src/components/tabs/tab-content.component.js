import { BaseComponent } from "../base/base.component.js";
import { Note } from "../note/note.component.js"
import { NoteGroup } from "../note-group/note-group.component.js"

export class TabContent extends BaseComponent {
    /**
     * 
     * @param { {selector: string, notes: Notes[]} } data 
     */
    constructor(data) {
        super(data)
        // TODO modify BaseComponent, it must understand what component to load depending from template; 
        // that removes next two lines of dependencies
        this.noteComponent = Note;
        this.noteGroupComponent = NoteGroup;
        this.template = data.template;
    }
}
