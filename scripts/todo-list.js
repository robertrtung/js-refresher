/*
 * To-do List
 */

function extractFormValues(list, itemText) {
    //var text = "";
    //var i;
    /*for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }*/
    //text+=list.elements["task"].value+"<br>";
    //text += "<li>" + "Hello" + "</li>";
    var item = document.createElement("li");
    item.innerText = itemText;
    list.appendChild(item);
    //document.getElementById("demo").append(text);
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