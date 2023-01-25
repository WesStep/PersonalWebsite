export default class Contact extends HTMLElement {
    #template = `
    <style>
        /*
          Josh's Custom CSS Reset
          https://www.joshwcomeau.com/css/custom-css-reset/
        */
        *, *::before, *::after {
            box-sizing: border-box;
        }
        
        * {
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
        }
        
        img, picture, video, canvas, svg {
            display: block;
            max-width: 100%;
        }
        
        input, button, textarea, select {
            font: inherit;
        }
        
        p, h1, h2, h3, h4, h5, h6 {
            overflow-wrap: break-word;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }
        
        section {
            padding: 4rem 1rem 2rem 1rem;
        }
        
        section p {
            padding: 0.5rem 0;
        }
    </style>
    
    <section>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam corporis dolore ducimus earum expedita facilis in, incidunt inventore ipsum magnam modi natus nemo perferendis quia quidem quod temporibus.</p>
    </section>
    `;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}