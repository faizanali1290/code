// !coustome element
window.customElements.define(
  "user-cards",
  class Cards extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `<h1>attached shadow<h1>`;
    }
  }
);

//! coustome Element and attached shadow

window.customElements.define(
  "user-card",
  class Cards extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
          <style>
            h1 {
              background: yellow;
            }
          </style>
          <h1>attached shadow</h1>`;
    }
  }
);

const template = document.createElement("template");
template.innerHTML = `
<p>attached template shadow doms</p>
`;
window.customElements.define(
  "temp-shadow",
  class Cards extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
);

// !use of shadow dom
const templates = document.getElementById("myTemplate");
const clone1 = templates.content.cloneNode(true);
const clone2 = templates.content.cloneNode(true);
const para = document.getElementById("para");
const paras = document.getElementById("paras");
para.appendChild(clone1);
paras.appendChild(clone2);

// ! attached shadow dom of elemnt
