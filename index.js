let Search = document.querySelector('.selector-find');
let Next = document.querySelector('.selector-next');
let Prev = document.querySelector('.selector-prev');
let Parent = document.querySelector('.nav-top');
let Child = document.querySelector('.nav-bottom'); 
let Left = document.querySelector('.nav-left');
let Right = document.querySelector('.nav-right');
let Input = document.querySelector('.selector');

let Select = {};

function setStyle(e) {
    e.style.outline = 'solid red 5px';
    e.style.backgroundColor = 'lightblue';
}
function unsetStyle(e) {
    if(e.now != undefined) {
        e.now.style.outline = 'none';
        e.now.style.backgroundColor = '';
    }
}

Search.addEventListener("click", function(e) {
    unsetStyle(Select);
    if(document.querySelector(Input.value)) {
        let elem = document.querySelector(Input.value);
        setStyle(elem);
        Next.disabled = false;
        Prev.disabled = false;
        Parent.disabled = false;
        Child.disabled = false;
        Select.now = elem;
    }
});
Next.addEventListener('click', function(e) {
    if(Select.now.nextElementSibling != undefined) {
        unsetStyle(Select);
        let nextElem = Select.now.nextElementSibling;
        Select.now = nextElem;
        setStyle(nextElem);
    }
});
Prev.addEventListener('click', function(e) {
    if(Select.now.previousElementSibling != undefined) {
        unsetStyle(Select);
        let prevElem = Select.now.previousElementSibling;
        Select.now = prevElem;
        setStyle(prevElem);
    }
});
Parent.addEventListener('click', function(e) {
    if(Select.now.parentElement != undefined) {
        unsetStyle(Select);
        let parentElem = Select.now.parentElement;
        Select.now = parentElem;
        setStyle(parentElem);
    }
});
Child.addEventListener('click', function(e) {
    if(Select.now.children[0] != undefined) {
        unsetStyle(Select);
        let childElem = Select.now.children[0];
        Select.now = childElem;
        setStyle(childElem);
    }
});

