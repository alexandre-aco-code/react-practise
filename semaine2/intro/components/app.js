// import ParagraphComponent from "./Components/ParagraphComponent";
import "./index.html";
import './src/assets/css/app.css';

import TestComponent from "./src/TestComponent.js";
import CustomElement from "./src/CustomELement.js";


// Nommer un custom element : obligatoirement avec un dash -
customElements.define("test-component", TestComponent);
//
customElements.define("custom-element", CustomElement, { extends: "p" });
