import { Note } from "./../components/note/note.component.js";
import { NoteGroup } from "./../components/note-group/note-group.component.js";
import { Tabs } from "./../components/tabs/tabs.component.js";

import { data as NOTES_JSON } from "./../data/data.js";

class TodoPage {
    constructor () {
        this.todaysNotesContainer;
        this.upcomingNotesContainer;
        this.tabs = document.querySelector("[data-dom=tabs]");

        this.notesGroupsData = this.getTransformedNotesGroups(NOTES_JSON);
        this.todaysNotes = this.getTodaysNotes(NOTES_JSON);
    }

    getTodaysNotes(data) {

        const result = [];
        let todayDate = new Date().toLocaleDateString();

        data.forEach( note => {
            let noteDate = new Date(note.date).toLocaleDateString();
            if (noteDate == todayDate) {
                result.push(note);
            };
        })
        return result;
    }

    getTransformedNotesGroups(data) {

        const uniqueDates = {};
        const result = [];

        //creating associative array with unique dates as keys
        data.forEach( note => {
            let currentDate = new Date(note.date).toLocaleDateString();

            if (!uniqueDates[currentDate]) {
                uniqueDates[currentDate] = [];
            }
            uniqueDates[currentDate].push(note)
        })

        //transforming of associative array to required array with 'date' and 'notes' keys
        Object.keys( uniqueDates ).forEach( key => {
            result.push({date: key, notes: uniqueDates[key]})
        })

        //sorting dates ascending
        result.sort( (a, b) => {
            if (a.date > b.date) {
                return 1;
            }
            if (a.date < b.date) {
                return -1;
            }
            return 0;
        })

        return result;
    }

    renderTodaysNotes() {
        this.todaysNotesContainer = document.querySelector("[data-dom=today-todos]");
        this.todaysNotes.forEach( item => {
            const note = new Note(item);
            this.todaysNotesContainer.append(note.render());
        })
    }

    renderUpcomingNotes() {
        this.upcomingNotesContainer = document.querySelector("[data-dom=upcoming-todos]");
        this.notesGroupsData.forEach( (item) => {
            const noteGroup = new NoteGroup(item);
            this.upcomingNotesContainer.append(noteGroup.render());
        })
    }

    renderTabs() {
        const tabs = new Tabs({ items: [{title: "Today", selector: "today", checked: "checked"}, {title: "Upcoming", selector: "upcoming"}] });
        this.tabs.append(tabs.render());
    }
}

const todoPage = new TodoPage();
todoPage.renderTabs();
todoPage.renderTodaysNotes();
todoPage.renderUpcomingNotes();
