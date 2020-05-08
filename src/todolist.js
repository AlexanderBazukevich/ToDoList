const addForm = document.querySelector('form');
const addField = document.querySelector('.control__field');
const list = document.querySelector('.list');
let notesList = [];

if (localStorage.getItem('todos')) {
    notesList = JSON.parse(localStorage.getItem('todos'));
}

showNotes(notesList);

addForm.addEventListener('submit', (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (addNote() == false) {
        return false;
    }

    addNote();
    clearNotes(list);
    showNotes(notesList);
    makeVisible();
})

function addNote() {
    let titleValue = addField.value;

    if (titleValue == '') {
        return false;
    }
    notesList.push({title: titleValue, group: "First", date:""});
    localStorage.setItem('todos', JSON.stringify(notesList));
    notesList = JSON.parse(localStorage.getItem('todos'));
    addField.value = '';
}

function showNotes(data) {
    let fragment = document.createDocumentFragment();

    data.forEach( (item) => {
        console.log(item.title);
        let i = document.createElement('i');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let span = document.createElement('span');
        let div = document.createElement('div');
        i.classList.add('fas', 'fa-check-circle');
        input.classList.add('note__selector');
        input.setAttribute("type", "checkbox");
        label.classList.add('note__check');
        span.classList.add('note__content');
        div.classList.add('note');
        span.textContent = item.title;
        label.append(input);
        label.append(i);
        div.append(span);
        div.append(label);
        fragment.append(div);
    })

    list.append(fragment);
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