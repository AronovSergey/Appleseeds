/*
    ~ list is a List instance created in List.js
*/
const newItemInput = document.querySelector('.new-item-section').firstElementChild;
const newItemButton = document.querySelector('.new-item-section').lastElementChild;
const ol = document.querySelector('ol');
const listItemsArray = ol.children;
const updateSection = document.querySelector('.update-section');
const updateSectionInput = document.querySelector('.update-section__input');
const updateSectionButton = document.querySelector('.update-section__button');
const totalTasks = document.querySelector('.footer_total__tasks');
const clearAll = document.querySelector('.footer__clear_all');


let selectedId = -1;
/*--------------------------------
~~~~~~~Add New Item Section~~~~~~~ 
--------------------------------*/
newItemButton.addEventListener('click', () => {
    list.create(newItemInput.value);
    newItemInput.value = "";
    updateList();
});

/*------------------------
~~~~~~~List Section~~~~~~~ 
------------------------*/
function updateList() {
    ol.innerHTML = "";

    const listData = list.getAll();

    listData.forEach((item, index) => {
        ol.innerHTML += `
        <li id="${item.getId()}">
            ${item.getContent()}
            <span><i class="fas fa-check"></i></span>
            <span><i class="fas fa-edit"></i></span>
            <span><i class="fas fa-trash"></i></span>
        </li>`
    })

    totalTasks.innerHTML = `You have ${list.getListLength()} pending tasks`

    addEventsToButtons();    
}

/*------------------------------
~~~~~~~List Items Section~~~~~~~ 
------------------------------*/
function addEventsToButtons(){
    for(let i = 0; i < listItemsArray.length; i++){
        let id = parseInt(listItemsArray[i].getAttribute('id'));
        let buttons = listItemsArray[i].children;

        // Cheack Button 
        buttons[0].addEventListener('click', (function(li) {
            return function () { checkEvent(li) };
       })(listItemsArray[i]));
       
       // Updata Button
       buttons[1].addEventListener('click', (function(id) {
        return function () { updateEvent(id) };
        })(id));

        // Remove Button
        buttons[2].addEventListener('click', (function(id) {
             return function () { removeEvent(id) };
        })(id));
    }
}

function checkEvent(li){
    li.classList.toggle('line-through');
}

function updateEvent(id){
    updateSection.classList.remove('display-none');
    selectedId = id;
}

function removeEvent(id){
    list.delete(id);
    updateList(id);
}

/*-----------------------------
~~~~~~~Clear All Section~~~~~~~ 
-----------------------------*/
clearAll.addEventListener('click', () => {
    list.removeAll();
    updateList();
});

/*--------------------------
~~~~~~~Update Section~~~~~~~ 
--------------------------*/
updateSectionButton.addEventListener('click', () =>{
    list.update(selectedId, updateSectionInput.value);
    updateSection.classList.add('display-none');
    updateList();
})