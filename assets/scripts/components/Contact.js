export default class Contact extends HTMLElement {
    #num1 = '534';
    #num2 = '355';
    #num3 = '8375';
    #mail1 = '5131petssew';
    #mail2 = '@gmail.com';
    #emailEl = new DOMParser()
        .parseFromString(`<a href="mailto:${this.getEmail()}">${this.getEmail()}</a>`, 'text/html');
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
        
        .inline-block {
            display: inline-block;
        }
        
        .btn {
            border: 0;
            background-color: navy;
            border-radius: 0.25rem;
            color: white;
            display: inline-block;
            margin: 0.5rem 0 0 0;
            padding: 0.25rem 0.5rem;
            transition: 0.2s;
            cursor: pointer;
        }
        
        .btn:hover {
            background-color: #555;
            transition: 0.2s;
        }
        
        .display-none {
            display: none;
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
        <div>
            <p class="inline-block">Call or Text: </p>
            <button class="btn" type="button" id="get-number-btn">Get Number</button>
            <a href="tel:${this.getNumber()}" id="num" class="inline-block display-none">${this.getNumber()}</a>
        </div>
        <div>
            <p class="inline-block">Email: </p>
            <button class="btn" type="button" id="get-email-btn">Get Email</button>
            <a href="mailto:${this.getEmail()}" id="email" class="inline-block display-none">${this.getEmail()}</a>
        </div>
        <p><a href="https://www.linkedin.com/in/wes-stephenson/">LinkedIn Profile</a></p>
        <p><a href="https://github.com/WesStep">GitHub Profile</a></p>
    </section>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
        this.getNumberBtnEl = this.shadowRoot.getElementById('get-number-btn');
        this.getEmailBtnEl = this.shadowRoot.getElementById('get-email-btn');
        this.numEl = this.shadowRoot.getElementById('num');
        this.emailEl = this.shadowRoot.getElementById('email');

        this.getNumberBtnEl.addEventListener('click', this.toggleShowNumber.bind(this));
        this.getEmailBtnEl.addEventListener('click', this.toggleShowEmail.bind(this));
    }

    toggleShowNumber() {
        this.numEl.style.display = (this.numEl.style.display !== 'inline-block') ? 'inline-block' : 'none';
    }

    toggleShowEmail() {
        this.emailEl.style.display = (this.emailEl.style.display !== 'inline-block') ? 'inline-block' : 'none';
    }

    getEmail() {
        return this.reverseString(this.#mail1) + this.#mail2;
    }

    getNumber() {
        return this.reverseString(this.#num1) + this.reverseString(this.#num2) + this.reverseString(this.#num3);
    }

    reverseString(string) {
        return string.split('').reverse().join('');
    }
}