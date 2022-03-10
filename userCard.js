const template = document.createElement("template");
template.innerHTML = `
    <style>
        #wrapper {
            background-color: #99aab5;
            border-radius: 10px;
            padding: 5px 10px;
            margin: 10px;
        }
        #bg {
            background-color: black;
            padding: 100px;
            border-radius: 10px;
            margin: 10px 0px;
        }
        h1 {
            text-align: center;
            background-color: #4682B4;
            border-radius: 10px;
            color: white;
        }
        button {
            background-color: #23272b;
            border: none;
            color: white;
            border-radius: 10px;
            font-size: 18px;
            padding: 5px 10px;
            width: 20%;
        }
        input {
            height: 30px;
            font-size: 20px;
            border-radius: 5px;
            width: 37%;
        }
        #addElem {
            width: 49.5%;
            margin: 10px 0px;
        }
        #removeElem {
            margin: 10px 0px;
            width: 49.5%;
        }
        .element {
            padding: 20px 30px;
            border-radius: 50%;
            background-color: #4682B4;
            display: inline-block;
        }
    </style>
    <div id="wrapper">
        <h1>Inside Shadow DOM</h1>
        <div id='bg'></div>
        <form>
            <input type='text' placeholder='Heading Text' name='heading'/>
            <input type='text' placeholder='DIV bg' name='bg'/>
            <button type='submit'> Submit</button>
        </form>
        <button id="addElem">Add Element</button>
        <button id="removeElem">Remove Element</button>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.shadowRoot.querySelector("h1").innerText = e.target.heading.value;
      this.shadowRoot.querySelector("#bg").style.backgroundColor =
        e.target.bg.value;
    });
    this.shadowRoot.querySelector("#addElem").addEventListener("click", () => {
      const div = document.createElement("div");
      div.classList.add("element");
      this.shadowRoot.querySelector("#wrapper").appendChild(div);
    });
    this.shadowRoot
      .querySelector("#removeElem")
      .addEventListener("click", () => {
        const div = this.shadowRoot.querySelector(".element");
        if (div) div.remove();
      });
  }
}

customElements.define("user-card", UserCard);
