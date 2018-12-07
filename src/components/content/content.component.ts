import template from './content.component.html';

export class ContentComponent {

    /**
     * Creates the HTML of the content component.
     */
    public createHtml(): void {
        document.body.insertAdjacentHTML('beforeend', template);
    }
}