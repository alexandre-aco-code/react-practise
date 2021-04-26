class TestComponent extends HTMLElement {

    constructor() {

        // Quand on hérite on doit appeler le construteur de la classe parent
        super(); //obligatoire

        console.log(this);

        this.attachShadow({ mode: "open" }); //l'élément se met automatiquement sur le DOM
        this.shadowRoot.append(TestComponent.template.content.cloneNode(true));
    }
}

TestComponent.template = document.createElement("template");

TestComponent.template.innerHTML = `
<div>
	<p>testing custom web commponents</p>
	<p>testing</p>
</div>   
`;

// Nommer un custome element : obligatoirement avec un tiret - (dash)
customElements.define("test-component", TestComponent);