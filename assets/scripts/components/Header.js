export default class Header extends HTMLElement {
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
        
        header {
            box-shadow: 0px 0px 5px black;
            position: fixed;
        
            width: 100%;
            background: rgb(225,217,209);
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        h1 {
            margin: 0;
            font-size: 2.5rem;
            transition: 0.2s;
        }
        
        a {
            text-decoration: none;
            color: blue;
        }
        
        ul {
            margin: 0;
            padding: 0;
            display: flex;
        }
        
        li {
            list-style-type: none;
            padding: 0 0.5rem;
        }
    </style>
    
    <header>
        <h1 id='title'>Wes Stephenson</h1>
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
    `;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
        window.onscroll = () => this.#scrollFunction();
    }

    #scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.shadowRoot.getElementById("title").style.fontSize = "1rem";
        } else {
            this.shadowRoot.getElementById("title").style.fontSize = "2.5rem";
        }
    }
}