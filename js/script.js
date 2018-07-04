var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementsByTagName('ul')[0];
var listItems = document.getElementById("list").querySelectorAll("li");
var li = document.querySelector('li:last-child');
var body = document.getElementById('buttonParent');
var deleteButtons = document.getElementsByClassName("deleteItem");

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleDoneClass() {
    this.classList.toggle("done");
}

function removeListItemAndButton() {
    this.previousSibling.remove();
    this.remove();
}

// Turn "done" class on and off
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", toggleDoneClass);
}

// Delete Buttons
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", removeListItemAndButton);
}

// Create New List Item and Button
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li).addEventListener("click", toggleDoneClass);
    var btn = document.createElement("BUTTON");
    btn.textContent = "Delete";
    btn.className = "deleteItem";
    body.appendChild(btn);
    ul.appendChild(btn).addEventListener("click", removeListItemAndButton);
    input.value = "";
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);