// Element natif customisé
class CustomELement extends HTMLParagraphElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener("click", () => console.log("click"));
    }

    disconnectedCallback() {
        console.log("disconnected");
    }
}

export default CustomELement;