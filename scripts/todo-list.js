/*
 * To-do List
 */

var totalItems = 0;

function updateItemStatus(){
	var cbId = this.id.replace("cb_","");//'this' is whatever called the function
	var itemText = document.getElementById("item_" + cbId);

	//toggle css
	if(this.checked){
		itemText.style.textDecoration = "none";
	} else{
		itemText.style.textDecoration = "line-through";
	}
}

function extractFormValues(list, itemText) {
    totalItems++;
    var item = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.id = "cb_" + totalItems;
    checkBox.type = "checkbox";
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.id = "item_" + totalItems;
    span.innerText = itemText;

    item.appendChild(checkBox);
	item.appendChild(span);
    
    list.appendChild(item);
}

var inputBox = document.getElementById("task");
inputBox.focus();

var btnNew = document.getElementById("try");
btnNew.onclick = function(){
	var text = inputBox.value;
	if(!text || text == "" || text == " "){
		return;
	}
	extractFormValues(document.getElementById("list"),text);
	inputBox.focus();
	inputBox.select();
};

inputBox.onkeydown = function(e){
	if(e.which == 13){//equals enter key
		var text = inputBox.value;
		if(!text || text == "" || text == " "){
			return;
		}
		extractFormValues(document.getElementById("list"),text);
		inputBox.focus();
		inputBox.select();
	}
};