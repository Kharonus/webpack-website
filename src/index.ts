import './styles.scss';

function createConstructionShield(): HTMLElement {
    const element = document.createElement('div');
	
	element.innerHTML = 'Currently under construction...';
	element.classList.add('construction-label');
	
	return element;
}

document.body.appendChild(createConstructionShield());