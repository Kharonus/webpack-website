import { scrollOffset } from '../../shared/constants'

import template from './header.component.html';

export class HeaderComponent {

    /**
     * Creates the HTML of the header component.
     */
    public createHtml(): void {
        document.body.insertAdjacentHTML('beforeend', template);

        // Initialize menu toggle
        const toggle = document.getElementById('menu-toggle');
        toggle.onclick = this.toggleNavigationMenu;

        // Initialize scrolling menu
        const scrollTargets = document.getElementsByClassName('scroll-target');

        for (const target of scrollTargets) {
            const element = target as HTMLElement;
            const id = element.getAttribute('data-scroll-target');
            element.onclick = () => this.scroll(id);
        }
    }

    private toggleNavigationMenu(): void {
        const menu = document.getElementById('navigation-menu');
        menu.style.visibility = menu.style.visibility === 'visible' ? 'collapse' : 'visible';
    }


    private scroll(scrollTargetId: string): void {
        const scrollAnchors = document.getElementsByClassName('scroll-anchor');

        for (const anchor of scrollAnchors) {
            const element = anchor as HTMLElement;
            const id = element.getAttribute('data-scroll-anchor');
            if (id === scrollTargetId) {
                window.scrollTo({ top: element.offsetTop - scrollOffset, behavior: 'smooth' });
            }
        }
    }
}