class TestComponent extends HTMLElement {

    constructor() {

        // Quand on hérite on doit appeler le construteur de la classe parent
        super(); //obligatoire

        this.attachShadow({ mode: "open" }); //l'élément se met automatiquement sur le DOM
        this.shadowRoot.append(TestComponent.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["color", "bg-color"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'color':
                this.shadowRoot.querySelector('p').style.color = newValue;
                break;
            case 'bg-color':
                this.style.backgroundColor = newValue;
                break;
        }
    }
}


TestComponent.template = document.createElement("template");

TestComponent.template.innerHTML = `
<style>
	:host{
		display: block;
		width: 200px;
		background-color: orangered;
	}
	div {
		width: 200px;
		background-color: orangered;
	}
	p {
		font-weight: bold;
		background-color: blue;
		color: white;
	}
</style>
<div>
	<p>testing custom web commponents</p>
	<p>testing</p>
	<slot name="test-span"></slot>
</div>   
`;

/**
 * mettre une balise slot avec un name permet de l'appeler dans le HTML pour écrire dans le custome element
 */




// Nommer un custome element : obligatoirement avec un tiret - (dash)
//customElements.define("test-component", TestComponent);

export default TestComponent;