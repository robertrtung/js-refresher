/*
 * To-do List
 */

//var totalItems = 0;

function updateItemStatus(){
	var cbId = this.id.replace("cb_","");//'this' is whatever called the function
	var itemText = document.getElementById("item_" + cbId);

	//toggle css
	if(!this.checked){
		itemText.className = "";
	} else{
		//itemText.style.textDecoration = "line-through";
		itemText.className = "checked";
	}
}

function renameItem(){
	var newText = prompt("What should we change it to?");
	if(!newText || newText == "" || newText == " "){
		return;
	}
	this.innerText = newText;
}

function removeItem(){
	var spanId = this.id.replace("item_","");
	document.getElementById("li_" + spanId).style.display = "none";
}

function extractFormValues(list, itemText) {
    //totalItems++;
    
    //get a unique number without using a global variable
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var item = document.createElement("li");
    item.id = "li_" + id;
    var checkBox = document.createElement("input");
    //checkBox.id = "cb_" + totalItems;
    checkBox.id = "cb_" + id;
    checkBox.type = "checkbox";
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    //span.id = "item_" + totalItems;
    span.id = "item_" + id;
    span.innerText = itemText;
    span.onclick = renameItem;

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

inputBox.onkeyup = function(e){
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