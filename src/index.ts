import './styles.scss';

function createConstructionShield(): HTMLElement {
	const element = document.createElement('div');
	
	element.innerHTML = 'Currently under construction...';
	element.classList.add('construction-label');

	return element;
}

document.body.appendChild(createConstructionShield());


function createParagraph(): HTMLElement {
	let element = document.createElement('p');

	element.innerHTML = 'beliebiger Text';
	element.classList.add('Marie-Uebung1');

	return element;
}

document.body.appendChild(createParagraph());
