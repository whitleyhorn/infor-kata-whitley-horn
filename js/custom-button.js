// Insert Button JS
const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
	<button class="custom-button">
	</button>
`;

const buttonSheet = new CSSStyleSheet();
buttonSheet.replaceSync(`
    button {
        font-size: 16px;
        background-color: #B7B7BA;
        border: 1px solid #B7B7BA;
        color: #47474C;
        min-height: 34px;
        padding: 0 30px;
        font-weight: 600;
        margin-left: 20px;
        margin: 20px 0 0 20px;
        cursor: pointer;
        font-family: "source sans pro", helvetica, arial, sans-serif;
    }
    button:hover {
        background: #9f9fa1;
    }
`);

class CustomButton extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
        this.shadowRoot.adoptedStyleSheets = [buttonSheet];
		this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
	}

    get button(){
        return this.shadowRoot.querySelector('button');
    }

    connectedCallback(){
        this.button.innerText = this.getAttribute('text');
    }
}

window.customElements.define('custom-button', CustomButton);
