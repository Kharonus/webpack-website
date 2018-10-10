function createConstructionShield() {
	let element = document.createElement('div');
	
	element.innerHTML = 'Currently under construction...';
	
	return element;
}

document.body.appendChild(createConstructionShield());

