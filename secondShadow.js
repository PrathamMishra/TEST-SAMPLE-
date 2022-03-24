const temp = document.createElement("template");
temp.innerHTML = `
  <div>
    <style>
      .child {
        padding: 20px 30px;
        border-radius: 50%;
        background-color: green;
        display: inline-block;
      }
    </style>
    <h2>Inside Second shadow</h2>
    <div id="sampleText">SAMPLE TEXT</div>
    <form id="mainForm">
      <input type="text" placeholder="Enter DIV color" name="divCol" />
      <div>
        <h4 style="display: inline;">Choose text color:</h4>
        <label>
          Black:
          <input type="radio" value="black" name="textCol" />
        </label>
        <label>
          White:
          <input type="radio" value="white" name="textCol" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <button id="addChild">Add Child</button>
    <button id="removeChild">Remove Child</button>
    <div>
      Show children:
      <input type="checkbox" id="toggleChild" checked />
    </div>
    <div id="childWrapper"></div>
  </div>
`;

class secondShadow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(temp.content.cloneNode(true));
  }
  connectedCallback() {
    const acBtn = this.shadowRoot.querySelector("#addChild");
    const rcBtn = this.shadowRoot.querySelector("#removeChild");
    const tcBtn = this.shadowRoot.querySelector("#toggleChild");
    const cDiv = this.shadowRoot.querySelector("#childWrapper");
    const mForm = this.shadowRoot.querySelector("#mainForm");
    const sText = this.shadowRoot.querySelector("#sampleText");

    acBtn.addEventListener("click", (e) => {
      const child = document.createElement("div");
      child.classList.add("child");
      cDiv.appendChild(child);
    });
    rcBtn.addEventListener("click", (e) => {
      cDiv.removeChild(cDiv.childNodes[0]);
    });
    tcBtn.addEventListener("change", (e) => {
      if (e.target.checked) {
        cDiv.style.display = "block";
      } else {
        cDiv.style.display = "none";
      }
    });
    mForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(e);
      sText.style.backgroundColor = e.target.divCol.value;
      sText.style.color = e.target.textCol.value;
    });
  }
}

customElements.define("second-shadow", secondShadow);
