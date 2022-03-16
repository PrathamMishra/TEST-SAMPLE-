const template = document.createElement("template");
template.innerHTML = `
    <h1>Another Shadow</h1>
    <slot></slot>
`;

class InsideShadowOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("inside-shadowTwo", InsideShadowTwo);
