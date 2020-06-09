const template = `<span class="note-group__title">{{date}}</span>`

export class NoteGroup {
    constructor(date) {
        this.date = date;
    }

    render() {
        let localTemplate = template;
        let fragment = document.createDocumentFragment();
        let noteGroup = document.createElement('div');
        noteGroup.classList.add('note-group');
        localTemplate = localTemplate.replace('{{date}}', this.date);
        noteGroup.innerHTML = localTemplate;
        fragment.append(noteGroup);

        return fragment;
    }
}