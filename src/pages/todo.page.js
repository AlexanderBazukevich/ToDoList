import { Note } from "./../components/note/note.component.js";
import { NoteGroup } from "./../components/note-group/note-group.component.js";
import { Tabs } from "./../components/tabs/tabs.component.js";

import { data as NOTES_JSON } from "./../data/data.js";
import { template } from "./todo.page.template.js";
import { BaseComponent } from "../components/base/base.component.js";

class TodoPage extends BaseComponent {
    constructor (data) {
        super(data);
        this.notesGroupsData = this.getTransformedNotesGroups(NOTES_JSON);
        this.todaysNotes = this.getTodaysNotes(NOTES_JSON);
        this.data.tabs = {
            items: [
                {title: "Today", selector: "today", checked: "checked", notes: this.todaysNotes, template: `<div class="tabs__content content" data-dom="{{selector}}-todos">[[note in notes]]</div>`},
                {title: "Upcoming", selector: "upcoming", notes: this.notesGroupsData, template: `<div class="tabs__content content" data-dom="{{selector}}-todos">[[noteGroup in notes]]</div>`},
            ]
        };
        this.tabsComponent = Tabs;
        this.noteComponent = Note;
        this.noteGroupComponent = NoteGroup;
        this.template = template;

        setTimeout(() => {
            document.querySelector('.application').append(this.render())
        })
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
}

const todoPage = new TodoPage()
