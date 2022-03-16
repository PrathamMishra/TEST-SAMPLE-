
const template = document.createElement("template");
template.innerHTML = `
    <slot></slot>
`;

class InsideShadowOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("inside-shadowOne", InsideShadowOne);
