var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var name = "Robert";
myHeading.textContent = 'Hello ' + name + '!';

//document.URL
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  //alert('Yay, I love chocolate ice cream!');    
} else {
  //alert('Awwww, but chocolate is my favorite...');    
}

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
    //confirm, prompt
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//JQUERY
//$("#main").append("Robert");

//window.open("http://www.w3schools.com");
//navigator.appName
//navigator.appCodeName
//navigator.platform

//myVar = setTimeout(function, milliseconds);
//clearTimeout(myVar);
//setInterval(function, milliseconds);
//

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

//Strings: length, indexOf, lastIndexOf, search, substring, substr, replace, toUpperCase, toLowerCase, concat, charAt, split
//
//Numbers: toString
//
var person = ["John", "Doe", 46];
var person = {firstName:"John", lastName:"Doe", age:46};
//Arrays: length, sort, push, toString, join, pop, shift (like dequeue), unshift (like enqueue), splice, sort (does a string sort), reverse
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
