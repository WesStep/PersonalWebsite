export default class AboutMe extends HTMLElement {
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
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }
        
        section {
            padding: 8rem 1rem 0 1rem;
            max-width: 30rem;
            margin: 0 auto;
        }
        
        section p {
            padding: 0.5rem 0;
        }
        
        img {
            max-width: 300px;
            max-height: 300px;
            margin: 0 auto;
            border-radius: 50%;
        }
    </style>
    
    <section>
        <img src="./assets/images/wes_stephenson.jpg"></img>
        <div>
            <h2>About Me</h2>
            <p>I am a web developer with experience in front-end and back-end languages and frameworks, namely Vue.js and Laravel (JavaScript and PHP, respectively). I enjoy designing and building web apps that simplify workflows, solve problems, automate mundane tasks, and bring real value to people. The thought of saving time and energy through programming excites me.</p>
            <p>When you don't find me at the computer programming or learning new programming languages, techniques, or methodologies, you'll probably find me either spending time with my family, crocheting, knitting, playing Rocket League or Factorio, or perfecting my chocolate chip cookie recipe.</p>
        </div>
    </section>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}
