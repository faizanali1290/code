// frist method

const shadowDOM = document
  .getElementById("shadowDOM")
  .attachShadow({ mode: "open" });
const h1 = document.createElement("h1");
h1.innerText = "iam a shadow";
h1.style.color = "red";

shadowDOM.appendChild(h1);


// second method
class Coustome extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "<p >this is coustome element</p>";
    }
  }
  
  customElements.define('new-p', Coustome);
  