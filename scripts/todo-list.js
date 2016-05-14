/*
 * To-do List
 */

function extractFormValues(list) {
    //var text = "";
    //var i;
    /*for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }*/
    //text+=list.elements["task"].value+"<br>";
    //text += "<li>" + "Hello" + "</li>";
    var item = document.createElement("li");
    item.innerText = "Hello";
    list.appendChild(item);
    //document.getElementById("demo").append(text);
}

var btnNew = document.getElementById("try");
btnNew.onclick = function(){
	extractFormValues(document.getElementById("list"));
};