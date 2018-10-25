import template from './header.component.html';

export class HeaderComponent {

    /**
     * Creates the HTML of the header component.
     */
    public createHtml(): void {
        document.body.insertAdjacentHTML('beforeend', template);

        const toggle = document.getElementById('menu-toggle');
        toggle.onclick = this.toggleNavigationMenu;
    }

    private toggleNavigationMenu(): void {
        const menu = document.getElementById('navigation-menu');
        menu.style.visibility = menu.style.visibility === 'visible' ? 'collapse' : 'visible';
    }
}