class InsideShadowOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = `
    <slot></slot>
`;
  }
}

customElements.define("inside-shadowOne", InsideShadowOne);
