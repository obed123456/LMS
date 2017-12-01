var  studentName = ["Obed", "Joakim", "Anna", "Elias", "Mange", "Rolf", "Erin", "White", "Stone", "Samahta"];
// Nedan gör function array till en lista med namn och drag and drop setAttribute
//komihåg det tilldelas uniq id för varje div
  var arrayLength = studentName.length;
  var temp;

  for (i = 0; i < arrayLength; i++) {
  temp = document.createElement('li');///skapar lista i en ul.
  temp.id = 'results' + i; //tilldelar unik id till varje elements li som skapas.
  temp.innerHTML = studentName[i];
  temp.setAttribute('draggable', 'true');
  temp.setAttribute('ondragstart', 'drag(event)');
  document.getElementsByClassName('studentNames')[0].appendChild(temp);
  console.log(temp); // it creates li items with unik id  
}

// Below will shuffle the list when we will click on shuffle

function shuffle(){
var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
}

// Nedan finns det funktion som skapar array in array och spara i chunks
   function chunkArray(arr, chunkCount) {
   let chunks = []; //takes studentList and put into chunks
   var newChunks = chunks.length;
   for (i = 0; i < newChunks; i++) {
   chunks = document.createElement('li');
}
   while(arr.length) {
     let chunkSize = Math.ceil(arr.length / chunkCount--);
     let chunk = arr.slice(0, chunkSize);
     chunks.push(chunk);
     arr = arr.slice(chunkSize);

   }
 return chunks;
 }

//den här while loop shufflar studentList:
var i = studentName.length, j;
while(--i > 0){
   j = Math.floor(Math.random()* (i+1));
   temp = studentName[j];
   studentName[j] = studentName[i];
   studentName[i] = temp;
   // den while loop tar shufflade studentList =  [] och delar in i 5 olika arrays. 
}

// funktionen nedan tar arrayer i en array och tilldelar i x antal boxar som finns.
function getNumber() {
	var x = document.getElementById("input").value;

// var number = document.getElementById("input").value;
var multiDim = chunkArray(newStudent, x);// skapar arrays in one array 

document.getElementsByClassName("blah")[0].innerHTML = multiDim[0];// first array in array 
document.getElementsByClassName("blah")[1].innerHTML = multiDim[1];// first array in array 
document.getElementsByClassName("blah")[2].innerHTML = multiDim[2];// first array in array 
document.getElementsByClassName("blah")[3].innerHTML = multiDim[3];// first array in array 
document.getElementsByClassName("blah")[4].innerHTML = multiDim[4];// first array in array 
document.getElementsByClassName("blah")[5].innerHTML = multiDim[5];// first array in array 
document.getElementsByClassName("blah")[6].innerHTML = multiDim[6];// first array in array 
document.getElementsByClassName("blah")[7].innerHTML = multiDim[7];// first array in array 
document.getElementsByClassName("blah")[8].innerHTML = multiDim[8];// first array in array 
document.getElementsByClassName("blah")[9].innerHTML = multiDim[9];// first array in array 
document.getElementsByClassName("blah")[10].innerHTML = multiDim[10];// first array in array 
document.getElementsByClassName("blah")[11].innerHTML = multiDim[11];// first array in array 
document.getElementsByClassName("blah")[12].innerHTML = multiDim[12];// first array in array 
document.getElementsByClassName("blah")[13].innerHTML = multiDim[13];// first array in array 
document.getElementsByClassName("blah")[14].innerHTML = multiDim[14];// first array in array 
document.getElementsByClassName("blah")[15].innerHTML = multiDim[15];// first array in array 
document.getElementsByClassName("blah")[16].innerHTML = multiDim[16];// first array in array 
document.getElementsByClassName("blah")[17].innerHTML = multiDim[17];// first array in array 
document.getElementsByClassName("blah")[18].innerHTML = multiDim[18];// first array in array 
document.getElementsByClassName("blah")[19].innerHTML = multiDim[19];// first array in array 
}

	var divCount = document.getElementById("input").value;
	var count;
	for (i = 0; i < divCount; i++) {
  count = document.createElement('div');
  count.className = 'newdiv';
  document.getElementsByClassName('newdiv')[0].appendChild(count);
}

// below will add divs with className blah inside the board
            	function add() {  
            	x = document.getElementById("input1").value;          	
				for(i=0; i<x; i++) {

			    var divs = document.createElement('div');
			    divs.className = "blah";
          divs.setAttribute('ondrop', 'drop(event)');
          divs.setAttribute('ondragover', 'allowDrop(event)');
			    document.getElementById('board').appendChild(divs);
}
}

// *******************drag and drop******************//
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    console.dir(ev.target.id.match);
    if (ev.target.id.match("results"))//this will prevent draging over the element.
      return;
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//**************************************************//

var _1 = document.getElementById("results0").innerHTML; 
var _2 = document.getElementById("results1").innerHTML; 
var _3 = document.getElementById("results2").innerHTML; 
var _4 = document.getElementById("results3").innerHTML; 
var _5 = document.getElementById("results4").innerHTML; 
var _6 = document.getElementById("results5").innerHTML; 
var _7 = document.getElementById("results6").innerHTML; 
var _8 = document.getElementById("results7").innerHTML; 
var _9 = document.getElementById("results8").innerHTML; 
var _10 = document.getElementById("results9").innerHTML
var newStudent = [_1, _2, _3, _4, _5, _7, _8, _9, _10];
console.log( newStudent);



// console.log(chunkArray(studentList, 5));
document.getElementById("div1").innerHTML = studentName;





// Ej fungerade shuffle men kan användas. Lite över kill
// function shuffleNew(){
// var li = document.querySelector('li');
// for (var i = li.length; i >= 0; i--) {
//     li[Math.random() * i | 0];
// }
// }

//  function shuffle(){
// var i = studentName.length, j;
// while(--i > 0){
//    j = Math.floor(Math.random()* (i+1));
//    temp = studentName[j];
//    studentName[j] = studentName[i];
//    studentName[i] = temp;
//    // den while loop tar shufflade studentList =  [] och delar in i 5 olika arrays. 
// }
// }

//TEST CODE BELOW to make multiDim array
var longArray = temp;
var size = 5;

var newArray = new Array(Math.ceil(longArray.length / size)).fill("").map(function() { 
  return this.splice(0, size) 
}, 
  longArray.slice()
  );
console.log(newArray);


