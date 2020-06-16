const template = `<div class="note note_shadowed">
    <span class="icon icon_note icon_small icon_halo_note"><i class="fas fa-{{group}}"></i></span>
    <div class="note__content">
        <span class="note__title">{{title}}</span>
        <span class="note__description">{{description}}</span>
    </div>
    <div class="control">
        <label class="control__label">
            <input class="control__field" type="checkbox" hidden="true">
            <span class="icon icon_note">
                <i class="fas fa-check-circle"></i>
            </span>
        </label>
    </div>
</div>`

export class Note {

    /**
     * Note Constructor
     * @param {{title: string, description: string, date: string, group: string}} data
     */
    constructor(data) {
        this.data = data;
    }

    /**
     * Render 
     * @param {any} params
     * @param {boolean} asString
     */
    render() {
        let localTemplate = template;
        let fragment = document.createDocumentFragment();
        let wrapper = document.createElement('div');
        localTemplate = localTemplate.replace('{{title}}', this.data.title);
        localTemplate = localTemplate.replace('{{description}}', this.data.description);
        localTemplate = localTemplate.replace('{{group}}', this.data.group);
        wrapper.innerHTML = localTemplate;
        fragment.append(wrapper.firstChild);

        return fragment;
    }

    renderAsString() {
        return this.render().firstChild.outerHTML;
    }

    delete() {

    }
}

// let fragment = document.createDocumentFragment();
// let note = document.createElement('div');
// let icon = document.createElement('span');
// let i = document.createElement('i');
// let noteContent = document.createElement('div');
// let noteTitle = document.createElement('span');
// let noteDescription = document.createElement('span');

// note.classList.add('note', 'note_shadowed');
// icon.classList.add('icon', 'icon_note', 'icon_small', 'icon_halo_note');
// i.classList.add('fas', 'fa-briefcase');
// noteContent.classList.add('note__content');
// noteTitle.classList.add('note__title');
// noteDescription.classList.add('note__description');

// noteTitle.textContent = this.title;
// noteDescription.textContent = this.description;

// noteContent.append(noteTitle);
// noteContent.append(noteDescription);
// icon.append(i);
// note.append(icon);
// note.append(noteContent);
// fragment.append(note);

// return fragment;