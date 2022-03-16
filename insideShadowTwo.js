class InsideShadowTwo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = `
    <div>
    <h1>Another Shadow</h1>
    <slot></slot></div>
`
  }
}

customElements.define("inside-shadowtwo", InsideShadowTwo);
