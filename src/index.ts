import { applyPolyfill } from "custom-elements-hmr-polyfill";
applyPolyfill();

//  reset the root to trigger rerender
if (document.body) {
  requestAnimationFrame(() => {
    document.body.innerHTML = "";
    document.body.innerHTML = "<root-app></root-app>";
  });
}

// PS! customElements.define can be called more then once when running pollyfil

export class RootApp extends HTMLElement {
  private name = "I am RootApp";
  connectedCallback() {
    this.innerHTML = `
      <div style="background-color:red">${this.name}</div>
      <hr>
      <element-one></element-one>
    `;
  }
}

customElements.define("root-app", RootApp);

export class ElementOne extends HTMLElement {
  private name = "I am ElementOne";
  connectedCallback() {
    this.innerHTML = `
      <div style="background-color:red">${this.name}</div>
      <hr>
        <element-two style="background-color:purple;display:block"></element-two>
    `;
  }
}
customElements.define("element-one", ElementOne);

export class ElementTwo extends HTMLElement {
  private name = "I am ElementTwo";
  connectedCallback() {
    this.innerHTML = `
      <div style="color:green;">${this.name}</div>
      <hr>
    `;
  }
}
customElements.define("element-two", ElementTwo);
