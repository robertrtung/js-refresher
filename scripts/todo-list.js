/*
 * To-do List
 */

//var totalItems = 0;
//
// base for Animation
goog.require('goog.fx');
goog.require('goog.fx.dom');
// queues
goog.require('goog.fx.AnimationQueue');
goog.require('goog.fx.AnimationSerialQueue');
goog.require('goog.fx.AnimationParallelQueue');
// easing
goog.require('goog.fx.easing');

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

var looper;
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}

var td = document.getElementById("to-do");
td.onclick = function(){
	var i = 0;
	var resize = new goog.fx.dom.Resize(goog.dom.$('link'),
	                          [100, 100], // start X and Y
	                          [400, 400], // end X and Y
	                          100);;
	var resize1 = new goog.fx.dom.Resize(goog.dom.$('link'),
	                          [400, 400], // start X and Y
	                          [100, 100], // end X and Y
	                          100);
	resize.play();
	goog.events.listen(resize, goog.fx.Animation.EventType.END,
    function(event) {
	        resize1.play();
	        i++;
    });
    goog.events.listen(resize1, goog.fx.Animation.EventType.END,
    function(event) {
    	if(i < 10){
	        resize.play();
    	} else{
    		console.log("Done resizing");
    	}
    });

	var r = 0;
	var g = 0;
	var b = 0;
	var j;
    // background color
    for(j = 0; j < 100; j++){
    	setTimeout(function(){
		    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
			r += 1;
	        r %= 255;
	        g += 2;
	        g %= 255;
	        b += 3;
	        b %= 255;
		}, 100*j);
    }
    rotateAnimation("to-do",1);
}

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