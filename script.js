const menuElem = document.getElementById('dd');
const titleElem = menuElem.querySelector('.title');
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
const myField = document.getElementById('myField');

function open () {
    menuElem.classList.toggle('active');
};

titleElem.addEventListener ('click', open);

function write (event) {
    if (event.target === list1) {
        myField.value = list1
    } if (event.target === list2) {
        myField.value = list2
    } if (event.target === list3) {
        myField.value = list3
    } if (event.target === list4) {
        myField.value = list4
    }  
};

menuElem.addEventListener ('click', write);

function hide (event) {
    if (event.target === list1) {
        menuElem.hidden = true
    } if (event.target === list2) {
        menuElem.hidden = true
    } if (event.target === list3) {
        menuElem.hidden = true
    } if (event.target === list4) {
        menuElem.hidden = true
    }  
}

// console.log(myField.value);
