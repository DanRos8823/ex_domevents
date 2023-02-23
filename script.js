var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liElements = document.querySelectorAll("li");




// CREATE BUTTON WITH DELETE FUNCTION 
function createDeleteButton(){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
	btn.addEventListener("click", deleteTask);
	return btn;
}


// GIVE DEFAULT LIST ATTRIBUTES
liElements.forEach((element) => {
	element.appendChild(createDeleteButton());
});
giveElementsToggle();


// GIVE ELEMENTS TOGGLE
function giveElementsToggle (){
	liElements.forEach((element) => {
		element.addEventListener("click", toggleClass);
	})
}

// TOGGLE LINE-THROUGH
function toggleClass(element){
	element.srcElement.classList.toggle("done");	
}


// DELETE ELEMENT FUNCTION
function deleteTask(){
	this.parentNode.parentNode.removeChild(this.parentNode);
}



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(createDeleteButton());
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		liElements = document.querySelectorAll("li");
		giveElementsToggle();
	}
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		liElements = document.querySelectorAll("li");
		giveElementsToggle();
	}
}





button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


