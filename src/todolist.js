const addForm = document.querySelector('form');
const addField = document.querySelector('.control__field_action_append');
const header = document.querySelector('.header');
const list = document.querySelector('.list');
const controlGroup = document.querySelector('.control-group');
let notesList = [];
let groupsList = [];
let currentNotesList = [];
let currentGroupName;

if (localStorage.getItem('todos')) {
    notesList = JSON.parse(localStorage.getItem('todos'));
    let group = getSelectedGroupTitle();
    showNotes(notesList, group);
    getCurrentNotesList(notesList, group);
}

if (localStorage.getItem('groups')) {
    groupsList = JSON.parse(localStorage.getItem('groups'));
    showGroups(groupsList);
}

header.lastElementChild.addEventListener('click', () => {
    if (addField.getAttribute('placeholder') == 'Add note') {
        addField.setAttribute('placeholder', 'Add group');
    } else {
        addField.setAttribute('placeholder', 'Add note');
    }
})

controlGroup.addEventListener('click', () => {

    if (!localStorage.getItem('todos')) {
        return false;
    }

    if (currentGroupName == getSelectedGroupTitle()) {
        return false;
    }

    if (currentGroupName) {
        currentNotesList = [];
        notesList = JSON.parse(localStorage.getItem('todos'));
        // currentGroupName = getSelectedGroupTitle();
        clearNotes(list);
        showNotes(notesList, currentGroupName);
        getCurrentNotesList(notesList, currentGroupName);
    }
})

addForm.addEventListener('submit', (event) => {

    event.stopPropagation();
    event.preventDefault();

    let titleValue = addField.value;
    let holder = addField.getAttribute('placeholder');
    currentGroupName = getSelectedGroupTitle();

    if (titleValue == '') {
        return false;
    }

    if (holder == 'Add note') {
        addNewNote(currentNotesList, titleValue, currentGroupName);
        addField.value = '';
    }

    if (holder == 'Add group') {
        addNewGroup(groupsList, titleValue);
        addField.setAttribute('placeholder', 'Add note');
        addField.value = '';
    }
})

list.addEventListener('click', (event) => {

    let e = event.target;
    let note = getParentNote(event);

    if (note == false) {
        return false;
    }

    let notes = list.querySelectorAll('.note');
    let content = note.querySelector('.note__content');
    let control = note.querySelector('.control');
    let labels = note.querySelectorAll('.control__label');
    let index = Array.prototype.indexOf.call(notes, note); //how it works

    if (e == labels[labels.length - 1].firstChild) {
        if (e.checked) {
            let newCheck = createCheck('fas', 'fa-times-circle', 'red');
            control.prepend(newCheck);
            checkNote(currentNotesList, index, true);
            content.classList.add('note__content_checked');
        } else {
            control.removeChild(control.firstChild);
            checkNote(currentNotesList, index, false);
            content.classList.remove('note__content_checked');
        }
    }

    if (e == labels[0].firstChild && labels.length > 1) {
        deleteNode(currentNotesList, list, index);
    }
})

function addNewNote(data, title, group) {
    createNote(title);
    makeVisible();

    data.push({title: title, group: group, date:""});
    mergeNotesLists();
    localStorage.setItem('todos', JSON.stringify(notesList));
}

function addNewGroup(data, title) {
    createGroup(title);

    data.push({title: title});
    localStorage.setItem('groups', JSON.stringify(data));
}

function deleteNode(data, elem, index) {
    //delete from currentList and full list
    notesList.splice(notesList.indexOf(data[index]), 1);
    data.splice(index, 1);
    mergeNotesLists();
    localStorage.setItem('todos', JSON.stringify(notesList));
    
    let animation = elem.childNodes[index].animate([
        { opacity: '1' }, 
        { opacity: '0' }
    ], 300);
    animation.onfinish = () => {
        elem.removeChild(elem.childNodes[index]);
    }
}

function showNotes(data, group) {

    data.forEach( (item) => {
        if (item.group == group) {
            createNote(item.title, item.checked);
        }
    })
}

function showGroups(data) {
    data.forEach( (item) => {
        createGroup(item.title);
    })
}

function createGroup(content) {
    let fragment = document.createDocumentFragment();
    let controlGroupItem = document.createElement('div');
    let control = document.createElement('div');
    let label = document.createElement('label');
    let icon = document.createElement('span');
    let title = document.createElement('span');
    let field = document.createElement('input');
    let i = document.createElement('i');

    i.classList.add('fas', 'fa-list-alt');
    field.classList.add('control__field');
    field.setAttribute('type', 'radio');
    field.setAttribute('name', 'group');
    field.setAttribute('hidden', true);
    icon.classList.add('control__icon', 'control__icon_white');
    title.classList.add('control__title');
    title.textContent = content;
    label.classList.add('control__label');
    control.classList.add('control');
    controlGroupItem.classList.add('control-group__item');
    icon.append(i);
    label.append(field);
    label.append(icon);
    label.append(title);
    control.append(label);
    controlGroupItem.append(control);
    fragment.append(controlGroupItem);
    controlGroup.append(fragment);
}

function createNote(content, checked) {
    let fragment = document.createDocumentFragment();
    let newCheck = createCheck('fas', 'fa-check-circle', 'blue', checked);
    let control = document.createElement('div');
    let note = document.createElement('div');
    let span = document.createElement('span');

    control.classList.add('control');
    control.append(newCheck);
    if (checked == true) {
        newCheck = createCheck('fas', 'fa-times-circle', 'red');
        control.prepend(newCheck);
    }
    span.classList.add('note__content');
    span.textContent = content;
    note.classList.add('note');
    note.append(span);
    note.append(control);
    fragment.append(note);
    list.append(fragment);
}

function createCheck(a, b, color, checked) {
    let fragment = document.createDocumentFragment();
    let i = document.createElement('i');
    let span = document.createElement('span');
    let input = document.createElement('input');
    let label = document.createElement('label');

    i.classList.add(a, b);
    span.classList.add('control__icon', 'control__icon_' + `${color}`);
    input.classList.add('control__field');
    input.setAttribute("type", "checkbox");
    input.setAttribute("hidden", "true");

    if (checked == true) {
        input.setAttribute("checked", checked);
    } else {
        input.removeAttribute("checked");
    }

    label.classList.add('control__label');
    span.append(i);
    label.append(input);
    label.append(span);
    fragment.append(label);

    return fragment;
}

function checkNote(data, index, checked) {
    data[index].checked = checked;
    mergeNotesLists();
    localStorage.setItem('todos', JSON.stringify(notesList));
}

function clearNotes(element) {
    let child = element.lastElementChild;

    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function makeVisible() {
    let newNote = document.querySelectorAll('.note');
    newNote[newNote.length - 1].animate([
        { opacity: '0' }, 
        { opacity: '1' }
    ], 300);
}

function getParentNote(event) {
    let e = event.target;

    if (e.classList == 'list') {
        return false;
    }

    while (e.classList != 'note') {
        e = e.parentNode;
    }

    return e;
}

function getSelectedGroupTitle() {
    let notesGroupInputs = controlGroup.querySelectorAll('.control__label');

    notesGroupInputs.forEach( (item) => {
        if (item.firstElementChild.checked) {
            currentGroupName = item.lastElementChild.innerText;
        }
    })

    return currentGroupName;
}

function getCurrentNotesList(data, group) {
    data.forEach( (item) => {
        if (item.group == group) {
            currentNotesList.push(item);
        }
    })
}

function mergeNotesLists() {
    let mergedList = notesList.concat(currentNotesList);
    notesList = mergedList.filter( (item, index) => {
        return mergedList.indexOf(item) == index; 
    })
}
