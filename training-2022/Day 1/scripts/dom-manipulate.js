/*
DOM (Document Object Model) structure

*Navigator

**Window

***Document

*/

/*

* Root node: The top node in the tree, which in the case of HTML is always the HTML node (other markup vocabularies like SVG and custom XML will have different root elements).

* Child node: A node directly inside another node. For example, IMG is a child of SECTION in the above example.

* Descendant node: A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY, as it is two levels below it in the tree, but it is a descendant of BODY.

* Parent node: A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.

* Sibling nodes: Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example.
* */

const genderList = [
    'Male',
    'Female',
    'N/A'
]

document.addEventListener('DOMContentLoaded', () => {
    changeLink();
    addGoogleNav();
    // selectActivePage();
    // addClickEventOnSubmit();
});

function changeLink() {
    const link = document.querySelector('a'); //  atribuie elemntul la o variabila
    link.href = 'login.html'; //rescrie valoarea
    link.textContent = 'Go to google'; // rescrie valoarea
}

// setTimeout(function() {
//     alert('Anonymous function is called!!!')
// }, 1000);

// function addGoogleNav(x, y) {
const addGoogleNav = () => {
    const parent = document.getElementsByTagName('ul')[0];
    const liClone = parent.lastElementChild.cloneNode();
    const anchor = document.createElement('a');
    anchor.textContent = 'Google';
    anchor.href = 'https://www.google.com/';
    liClone.appendChild(anchor);
    parent.appendChild(liClone);
}

const selectActivePage = () => {
    const navigation = document.getElementById('navigation');
    const itemList = navigation.getElementsByTagName('li');
    itemList[1].classList.add('active')
}

const selectPageByIndex = (index, event) => {
    console.log(event);
    const navigation = document.getElementById('navigation');
    const itemList = navigation.getElementsByTagName('li');
    document.querySelectorAll('.active').forEach((item) => item.classList.remove('active'));
    itemList[index].classList.add('active')
}

const submitIsPressed = () => {
    console.log('Submit is pressed!!')
}

const addClickEventOnSubmit = () => {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', submitIsPressed)
}

function setGenderSelect() {
    const selectElement = document.getElementById('gender');
    selectElement.firstChild
}

