var list = document.getElementById('list');
var addElem = document.getElementById('addElem');

addElem.addEventListener('click', function() {
	console.log("klik");
	var element = document.createElement('li');
	var itemsLength = document.getElementsByTagName('li').length;
	element.innerHTML = "item "+itemsLength;
	list.appendChild(element);
});