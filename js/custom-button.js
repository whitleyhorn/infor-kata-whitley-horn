// Insert Button JS
const buttonTemplate = document.createElement('template');
buttonTemplate.innerHTML = `
	<style>
        button {
            background-color: #B7B7BA;
            border: 1px solid #B7B7BA;
            color: #47474C;
            min-height: 34px;
            padding: 0 30px;
            font-weight: bold;
            margin-left: 20px;
            cursor: pointer;
        }
        button:hover {
            background: #9f9fa1;
        }
	</style>
	<button class="custom-button">
	</button>
`;

class CustomButton extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
		this.shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));
	}

    get button(){
        return this.shadowRoot.querySelector('button');
    }

    connectedCallback(){
        this.button.innerText = this.getAttribute('text');
        const clickEvent = new CustomEvent('clicked');
        const dispatch = this.dispatchEvent.bind(this, clickEvent);
        this.button.addEventListener('click', dispatch);
    }
}

window.customElements.define('custom-button', CustomButton);
