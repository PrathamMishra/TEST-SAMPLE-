const template = document.createElement("template");
template.innerHTML = `
    <inside-shadowOne>
        <h1>Slot First</h1>
    </inside-shadowOne>
    <inside-shadowTwo>
        <h2>Slot Second</h2>
    </inside-shadowTwo>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("user-card", UserCard);
