// insert message js
const dialogTemplate = document.createElement('template');
dialogTemplate.innerHTML = `
	<style>
        .wrapper {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            margin: 0 auto;
            position: absolute;
            width: 100%;
        }

        .modal {
           width: 427px; 
        }

        .content {
            background: #ffffff;
            border-radius: 2px;
            box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
            color: #606066;
            margin: 16px 16px 0;
            position: relative;
            padding: 16px;
        }

        .content .header {
            font-size: 28px;
        }

        .content .header img {
            height: 20px;
        }

        .content .body {
            margin: 32px 0px 30px;
        }

        .button {
            background: white;
            margin: 0 16px;
            text-align: center;
            color: #0066d4;
            border-top: 1px solid black;
            padding: 16px;
            cursor: pointer;
        }

        .hide {
            display: none;
        }
	</style>
    <div class="wrapper hide">
       <div class="modal">
         <div class="content">
            <div class="header">
                <img src="images/error-alert.svg">
                <span>Lost Connection</span>
            </div>
            <div class="body">
                <div>This application has experienced a <b>system error</b> due to the lack of internet access.</div>
                <div><i>Please</i> restart the application in order to proceed.</div>
            </div>
         </div>
        <div class="button">Restart Now</div>
       </div> 
    </div>
`;

class CustomMessageDialog extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({ mode: 'open'});
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
