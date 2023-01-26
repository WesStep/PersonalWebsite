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
        
        /****************
            END Css Reset
        *****************/
        
        a {
            text-decoration: none;
            color: blue;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }
        
        section {
            padding: 4rem 1rem 2rem 1rem;
            max-width: 40rem;
            margin: 0 auto;
        }
        
        section p {
            padding: 0.5rem 0;
        }
    </style>
    
    <section>
        <h2>Contact</h2>
        <p>Feel free to reach out! Please no spam.</p>
        <p>Call or Text: <a href="tel:14355535738">435-553-5738</a></p>
        <p>Email: <a href="mailto:wesstep1315@gmail.com">wesstep1315@gmail.com</a></p>
        <p><a href="https://www.linkedin.com/in/wes-stephenson/">LinkedIn Profile</a></p>
        <p><a href="https://github.com/WesStep">GitHub Profile</a></p>
    </section>
    `;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}