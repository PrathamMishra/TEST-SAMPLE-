class InsideShadowOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = `
    <h1>Another Shadow</h1>
    <slot></slot>
`
  }
}

customElements.define("inside-shadowTwo", InsideShadowTwo);
