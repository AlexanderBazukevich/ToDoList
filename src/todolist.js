const addForm = document.querySelector('form');
const addField = document.querySelector('.control__field');
const list = document.querySelector('.list');
let nodes = list.childNodes;
let notesList = [];

if (localStorage.getItem('todos')) {
    notesList = JSON.parse(localStorage.getItem('todos'));
    showNotes('todos');
}

addForm.addEventListener('submit', (event) => {
    event.stopPropagation();
    event.preventDefault();
    let titleValue = addField.value;

    if (titleValue == '') {
        return false;
    }

    addNote(notesList, titleValue);
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
            let fragment = document.createDocumentFragment();
            let check = createCheck('fas', 'fa-times-circle', 'red');
            fragment.append(check);
            control.prepend(fragment);
        } else {
            control.removeChild(control.firstChild);
        }
    }

    if (e == labels[0].firstChild && labels.length > 1) {
        deleteNode(notesList, list, index);
    }
})

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

function addNote(data, title) {
    createNote(title);
    makeVisible();

    data.push({title: title, group: "First", date:""});
    localStorage.setItem('todos', JSON.stringify(data));
}

function deleteNode(data, elem, index) {
    data.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(data));
    
    let animation = elem.childNodes[index].animate([
        { opacity: '1' }, 
        { opacity: '0' }
    ], 300);
    animation.onfinish = () => {
        elem.removeChild(elem.childNodes[index]);
    }
}

function showNotes(name) {
    data = JSON.parse(localStorage.getItem(name));

    data.forEach( (item) => {
        createNote(item.title);
    })
}

function createNote(content) {
    let fragment = document.createDocumentFragment();
    let check = createCheck('fas', 'fa-check-circle', 'blue');
    let control = document.createElement('div');
    let note = document.createElement('div');
    let span = document.createElement('span');

    control.classList.add('control');
    control.append(check);
    span.classList.add('note__content');
    span.textContent = content;
    note.classList.add('note');
    note.append(span);
    note.append(control);
    fragment.append(note);
    list.append(fragment);
}

function createCheck(a, b, color) {
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
    label.classList.add('control__label');
    span.append(i);
    label.append(input);
    label.append(span);
    fragment.append(label);

    return fragment;
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
