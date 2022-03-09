const template = document.createElement('template');
template.innerHTML=`<h1>Sample heading</h1>`
debugger;

class UserCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('user-card',UserCard)