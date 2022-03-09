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
        }
        input {
            height: 20px;
            font-size: 18px;
            border-radius: 5px;
        }
    </style>
    <div id="wrapper">
        <h1>The content of document inside Shadow DOM</h1>
        <div id='bg'></div>
        <form>
            <input type='text' placeholder='Heading Text' name='heading'/>
            <input type='text' placeholder='DIV bg' name='bg'/>
            <button type='submit'> Submit</button>
        </form>
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
  }
}

customElements.define("user-card", UserCard);
