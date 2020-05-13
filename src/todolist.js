const addForm = document.querySelector('form');
const addField = document.querySelector('.control__field');
const list = document.querySelector('.list');
const controlGroup = document.querySelector('.control-group');
let notesList = [];
let currentNotesList = [];

if (localStorage.getItem('todos')) {
    notesList = JSON.parse(localStorage.getItem('todos'));
    let group = getSelectedGroupTitle();
    showNotes(notesList, group);
    getCurrentNotesList(notesList, group);
}

if (localStorage.getItem('todos')) {
    let labels = controlGroup.querySelectorAll('.control__label');

    labels.forEach((item) => {
        item.addEventListener('click', () => {
            currentNotesList = [];
            notesList = JSON.parse(localStorage.getItem('todos'));
            let groupName = getSelectedGroupTitle();

            if (item.lastElementChild.innerText == groupName) {
                clearNotes(list);
                showNotes(notesList, groupName);
                getCurrentNotesList(notesList, groupName);
            }
        })
    })
}


addForm.addEventListener('submit', (event) => {

    event.stopPropagation();
    event.preventDefault();

    let titleValue = addField.value;
    let groupName = getSelectedGroupTitle();

    if (titleValue == '') {
        return false;
    }

    addNewNote(currentNotesList, titleValue, groupName);
    addField.value = '';
})

list.addEventListener('click', (event) => {

    let e = event.target;
    let note = getParentNote(event);

    if (note == false) {
        return false;
    }

    let notes = list.querySelectorAll('.note');
    let control = note.querySelector('.control');
    let labels = note.querySelectorAll('.control__label');
    let index = Array.prototype.indexOf.call(notes, note); //how it works

    if (e == labels[labels.length - 1].firstChild) {
        if (e.checked) {
            let newCheck = createCheck('fas', 'fa-times-circle', 'red');
            control.prepend(newCheck);
            checkNote(currentNotesList, index, true);
        } else {
            control.removeChild(control.firstChild);
            checkNote(currentNotesList, index, false);
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
    let groupName;

    notesGroupInputs.forEach( (item) => {
        if (item.firstElementChild.checked) {
            groupName = item.lastElementChild.innerText;
        }
    })

    return groupName;
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
    console.log(notesList);
    console.log(currentNotesList);
}

//changed: checked notes keep save after page refresh; added list switching and target notes adding;