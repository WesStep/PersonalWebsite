export default class Footer extends HTMLElement {
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
        
        footer {
            box-shadow: 0px 0px 2px black;
            margin-top: 2rem;
            padding: 1rem;
        }
    </style>
    
    <footer>
        <h3>Wes Stephenson</h3>
        <p>wesstep1315@gmail.com</p>
        <div>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
        </div>
    </footer>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}