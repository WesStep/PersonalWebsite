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
        
        footer {
            box-shadow: 0px 0px 5px black;
            background: rgb(225,217,209);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        ul {
            padding: 0.25rem 0;
            display: flex;
        }
        
        li {
            padding: 0 0.5rem;
            list-style-type: none;
        }
        
        li a {
            text-decoration: none;
        }
        
        img {
            max-width: 24px;
        }
    </style>
    
    <footer>
        <h3>Wes Stephenson</h3>
        <p>Cell: 435-553-5738</p>
        <p>Email: wesstep1315@gmail.com</p>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/wes-stephenson/">
                    <img src="./assets/images/linkedin.svg"></img>
                </a>
            </li>
            <li>
                <a href="https://github.com/WesStep">
                    <img src="./assets/images/github-mark.svg"></img>
                </a>
            </li>
        </ul>
    </footer>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}