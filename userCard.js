const template = document.createElement("template");
template.innerHTML = `
    <inside-shadowone>
        <h1>Slot First</h1>
    </inside-shadowone>
    <inside-shadowtwo>
        <h2>Slot Second</h2>
    </inside-shadowtwo>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("user-card", UserCard);
