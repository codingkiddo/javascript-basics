

var element = document.getElementById("first");


setTimeout(() => {
    var i, li,
	frag = document.createDocumentFragment(),
	ul = frag.appendChild(document.createElement('ul'));

    for (i = 1; i <= 3; i++) {
        li = ul.appendChild(document.createElement('li'));
        li.textContent = 'item ' + i;
    }

    document.body.appendChild(frag);
   
}, 10000);


// console.log(element.style.color);