/* eslint-disable indent */

const TEMPLATE = `
    <h1 class="main-title"></h1>
    <h2 class="title"></h2>
    <p class="description"></p>
`;

`HTMLImageElement`
class WebsiteSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = TEMPLATE;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'main-title':
                this.querySelector('.main-title').innerHTML = newValue;
                break;
            case 'title':
                this.querySelector('.title').innerHTML = newValue;
                break;
            case 'description':
                this.querySelector('.description').innerHTML = newValue;
                break;
        }
    }

    static get observedAttributes() {
        return ['main-title', 'title', 'description'];
    }
}

customElements.define('website-section', WebsiteSection);