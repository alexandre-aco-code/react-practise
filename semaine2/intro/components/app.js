import TestComponent from "./TestComponent.js";
import CustomElement from "./CustomELement.js";
// Nommer un custom element : obligatoirement avec un dash -
customElements.define("test-component", TestComponent);
//
customElements.define("custom-element", CustomElement, { extends: "p" });
