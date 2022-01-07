// insert message js
const dialogTemplate = document.createElement('template');
dialogTemplate.innerHTML = `
    <div class="wrapper hide">
       <div class="modalContent">
            <div class="header">
                <img src="images/error-alert.svg">
                <span>Lost Connection</span>
            </div>
            <div class="body">
                <div>This application has experienced a <b>system error</b> due to the lack of internet access.</div>
                <div><i>Please</i> restart the application in order to proceed.</div>
            </div>
            <div class="button">Restart Now</div>
       </div> 
    </div>
`;

const dialogSheet = new CSSStyleSheet();
dialogSheet.replaceSync(`
    .wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        margin: 0 auto;
        position: absolute;
        width: 100%;
        top: 0;
    }

    .modalContent {
        width: 401px; 
        height: 220px;
        background: #ffffff;
        border: 1px solid #B7B7BA;
        border-radius: 2px;
        box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
        color: #606066;
        margin: 10px;
        position: relative;
    }

    .header {
        font-size: 26px;
        padding: 16px 16px 0;
    }

    .header span {
        margin-left: 10px;
    }

    .header img {
        height: 20px;
    }

    .body {
        margin: 32px 16px;
    }

    .button {
        background: white;
        text-align: center;
        color: #0066d4;
        border-top: 1px solid #B7B7BA;
        padding: 16px;
        cursor: pointer;
        font-weight: 600;
    }

    .hide {
        display: none;
    }
`);

class CustomMessageDialog extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
        this.shadowRoot.adoptedStyleSheets = [dialogSheet];
		this.shadowRoot.appendChild(dialogTemplate.content.cloneNode(true));
	}
    
    get wrapper(){
        return this.shadowRoot.querySelector('div.wrapper');
    }

    show(){
        this.wrapper.classList.remove('hide');
        document.querySelector('.overlay').classList.remove('hide');
    }

    hide(){
        this.wrapper.classList.add('hide');
        document.querySelector('.overlay').classList.add('hide');
    }

    connectedCallback(){
        this.shadowRoot.querySelector('div.button').addEventListener('click', this.hide.bind(this));
    }
}

window.customElements.define('custom-message-dialog', CustomMessageDialog);
