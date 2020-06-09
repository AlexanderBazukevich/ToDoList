import { Note } from "./../components/note/note.component.js";
import { NoteGroup } from "./../components/note-group/note-group.component.js";

import { data as NOTES_JSON } from "./../data/data.js";

class TodoPage {
    constructor () {
        this.todaysNotesContainer = document.querySelector("[data-dom=todays-todos]");
        this.upcomingNotesContainer = document.querySelector("[data-dom=upcoming-todos]")
    }

    renderTodaysNotes() {
        NOTES_JSON.forEach( item => {
            const note = new Note(item.title, item.description, ['note', 'note_shadowed']);
            this.todaysNotesContainer.append(note.render())
        })
    }

    renderUpcomingNotes() {
        let currentDate;
        let fragment = document.createDocumentFragment();
        NOTES_JSON.forEach( item => {
            const note = new Note(item.title, item.description, ['note']);
            const noteGroup = new NoteGroup(item.date);
            let previousDate = currentDate;
            currentDate = item.date;
            if (currentDate != previousDate) {
                fragment = noteGroup.render().firstChild;
                fragment.append(note.render());
            } else {
                fragment.append(note.render());
            }
            this.upcomingNotesContainer.append(fragment);
        })
    }
}

const todoPage = new TodoPage();
todoPage.renderTodaysNotes();
todoPage.renderUpcomingNotes();