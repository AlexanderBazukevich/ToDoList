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
            const note = new Note(item);
            this.todaysNotesContainer.append(note.render());
        })
    }

    renderUpcomingNotes() {
        let fragment = document.createDocumentFragment();
        let data = {
            date: NOTES_JSON[0].date,
            notes: [],
        }
        NOTES_JSON.forEach( item => {
            const noteGroup = new NoteGroup(data);
            if (data.date == item.date) {
                data.notes.push(item);
                return false;
            }
            fragment = noteGroup.render();
            this.upcomingNotesContainer.append(fragment);
            data.notes = [];
            data.notes.push(item);
            data.date = item.date;
        })
        const noteGroup = new NoteGroup(data);
        fragment = noteGroup.render();
        this.upcomingNotesContainer.append(fragment);
    }
}

const todoPage = new TodoPage();
todoPage.renderTodaysNotes();
todoPage.renderUpcomingNotes();